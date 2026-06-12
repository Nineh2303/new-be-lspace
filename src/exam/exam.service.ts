import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '../generated/client';
import { PrismaService } from '../prisma.service';
import { BusinessException } from '../common/BusinessException';
import { ICreateExamRequest, IUpdateExamRequest } from './models/request/ExamRequest';
import { ICreateQuestionRequest, IUpdateQuestionRequest } from './models/request/QuestionRequest';
import { IStartAttemptRequest, ISubmitAttemptRequest } from './models/request/AttemptRequest';
import {
  IExamResponse,
  IQuestionResponse,
  IExamAttemptResponse,
  IAttemptResultResponse,
  ISubmitAttemptResponse,
} from './models/response/ExamResponse';

@Injectable()
export class ExamService {
  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
  ) {}

  // ── Exam ────────────────────────────────────────────────────────────────────

  /** GET /api/exams — chỉ trả về bài thi đã published (dành cho học sinh) */
  async findAllPublished(): Promise<{ data: IExamResponse[]; total: number }> {
    const exams = await this.prisma.exam.findMany({
      where: { is_published: true },
      include: { _count: { select: { questions: true } } },
      orderBy: { created_at: 'desc' },
    });

    const data: IExamResponse[] = exams.map((e) => ({
      id: e.id,
      title: e.title,
      description: e.description,
      time_limit_minutes: e.time_limit_minutes,
      passing_score: e.passing_score,
      is_published: e.is_published,
      created_at: e.created_at,
      question_count: e._count.questions,
    }));

    return { data, total: data.length };
  }

  /** GET /api/exams/all — tất cả bài thi (dành cho admin) */
  async findAll(): Promise<{ data: IExamResponse[]; total: number }> {
    const exams = await this.prisma.exam.findMany({
      include: { _count: { select: { questions: true } } },
      orderBy: { created_at: 'desc' },
    });

    const data: IExamResponse[] = exams.map((e) => ({
      id: e.id,
      title: e.title,
      description: e.description,
      time_limit_minutes: e.time_limit_minutes,
      passing_score: e.passing_score,
      is_published: e.is_published,
      created_at: e.created_at,
      question_count: e._count.questions,
    }));

    return { data, total: data.length };
  }

  /** GET /api/exams/:id — chi tiết bài thi */
  async findOne(id: string): Promise<IExamResponse> {
    const exam = await this.prisma.exam.findUnique({
      where: { id },
      include: { _count: { select: { questions: true } } },
    });

    if (!exam) {
      throw new BusinessException(`Không tìm thấy bài thi với id: ${id}`);
    }

    return {
      id: exam.id,
      title: exam.title,
      description: exam.description,
      time_limit_minutes: exam.time_limit_minutes,
      passing_score: exam.passing_score,
      is_published: exam.is_published,
      created_at: exam.created_at,
      question_count: exam._count.questions,
    };
  }

  /** POST /api/exams — tạo bài thi mới */
  async create(payload: ICreateExamRequest): Promise<IExamResponse> {
    if (!payload.title?.trim()) {
      throw new BusinessException('Tiêu đề bài thi không được để trống');
    }

    const exam = await this.prisma.exam.create({
      data: {
        title: payload.title.trim(),
        description: payload.description ?? null,
        time_limit_minutes: payload.time_limit_minutes ?? null,
        passing_score: payload.passing_score ?? 50,
        is_published: payload.is_published ?? false,
      },
      include: { _count: { select: { questions: true } } },
    });

    return {
      id: exam.id,
      title: exam.title,
      description: exam.description,
      time_limit_minutes: exam.time_limit_minutes,
      passing_score: exam.passing_score,
      is_published: exam.is_published,
      created_at: exam.created_at,
      question_count: exam._count.questions,
    };
  }

  /** PUT /api/exams/:id — cập nhật bài thi */
  async update(id: string, payload: IUpdateExamRequest): Promise<IExamResponse> {
    await this.findOne(id); // throws BusinessException nếu không tồn tại

    const exam = await this.prisma.exam.update({
      where: { id },
      data: {
        ...(payload.title !== undefined && { title: payload.title.trim() }),
        ...(payload.description !== undefined && { description: payload.description }),
        ...(payload.time_limit_minutes !== undefined && { time_limit_minutes: payload.time_limit_minutes }),
        ...(payload.passing_score !== undefined && { passing_score: payload.passing_score }),
        ...(payload.is_published !== undefined && { is_published: payload.is_published }),
      },
      include: { _count: { select: { questions: true } } },
    });

    return {
      id: exam.id,
      title: exam.title,
      description: exam.description,
      time_limit_minutes: exam.time_limit_minutes,
      passing_score: exam.passing_score,
      is_published: exam.is_published,
      created_at: exam.created_at,
      question_count: exam._count.questions,
    };
  }

  /** DELETE /api/exams/:id — xóa bài thi (cascade xóa câu hỏi + lần thi) */
  async remove(id: string): Promise<{ success: boolean; message: string }> {
    await this.findOne(id);
    await this.prisma.exam.delete({ where: { id } });
    return { success: true, message: 'Xóa bài thi thành công' };
  }

  // ── Questions ────────────────────────────────────────────────────────────────

  /** GET /api/exams/:examId/questions — lấy câu hỏi (ẩn correct_answer khi làm bài) */
  async findQuestions(examId: string, hideAnswer = true): Promise<{ data: IQuestionResponse[] }> {
    await this.findOne(examId);

    const questions = await this.prisma.question.findMany({
      where: { exam_id: examId },
      orderBy: { order_index: 'asc' },
    });

    const data: IQuestionResponse[] = questions.map((q) => ({
      id: q.id,
      exam_id: q.exam_id,
      content: q.content,
      question_type: q.question_type,
      options: (q.options as { id: string; text: string }[]) ?? null,
      correct_answer: hideAnswer ? null : q.correct_answer,
      explanation: hideAnswer ? null : q.explanation,
      points: q.points,
      order_index: q.order_index,
    }));

    return { data };
  }

  /** POST /api/exams/:examId/questions — thêm câu hỏi */
  async createQuestion(examId: string, payload: ICreateQuestionRequest): Promise<IQuestionResponse> {
    await this.findOne(examId);

    if (!payload.content?.trim()) {
      throw new BusinessException('Nội dung câu hỏi không được để trống');
    }

    // Tự động tính order_index tiếp theo
    const lastQuestion = await this.prisma.question.findFirst({
      where: { exam_id: examId },
      orderBy: { order_index: 'desc' },
    });
    const nextIndex = payload.order_index ?? (lastQuestion ? lastQuestion.order_index + 1 : 0);

    const question = await this.prisma.question.create({
      data: {
        exam_id: examId,
        content: payload.content.trim(),
        question_type: payload.question_type,
        options: payload.options ?? Prisma.JsonNull,
        correct_answer: payload.correct_answer ?? null,
        explanation: payload.explanation ?? null,
        points: payload.points ?? 1,
        order_index: nextIndex,
      },
    });

    return {
      id: question.id,
      exam_id: question.exam_id,
      content: question.content,
      question_type: question.question_type,
      options: (question.options as { id: string; text: string }[]) ?? null,
      correct_answer: question.correct_answer,
      explanation: question.explanation,
      points: question.points,
      order_index: question.order_index,
    };
  }

  /** PUT /api/exams/:examId/questions/:id — cập nhật câu hỏi */
  async updateQuestion(
    examId: string,
    questionId: string,
    payload: IUpdateQuestionRequest,
  ): Promise<IQuestionResponse> {
    const existing = await this.prisma.question.findFirst({
      where: { id: questionId, exam_id: examId },
    });
    if (!existing) {
      throw new BusinessException(`Không tìm thấy câu hỏi với id: ${questionId}`);
    }

    const question = await this.prisma.question.update({
      where: { id: questionId },
      data: {
        ...(payload.content !== undefined && { content: payload.content.trim() }),
        ...(payload.question_type !== undefined && { question_type: payload.question_type }),
        ...(payload.options !== undefined && { options: payload.options ?? Prisma.JsonNull }),
        ...(payload.correct_answer !== undefined && { correct_answer: payload.correct_answer }),
        ...(payload.explanation !== undefined && { explanation: payload.explanation }),
        ...(payload.points !== undefined && { points: payload.points }),
        ...(payload.order_index !== undefined && { order_index: payload.order_index }),
      },
    });

    return {
      id: question.id,
      exam_id: question.exam_id,
      content: question.content,
      question_type: question.question_type,
      options: (question.options as { id: string; text: string }[]) ?? null,
      correct_answer: question.correct_answer,
      explanation: question.explanation,
      points: question.points,
      order_index: question.order_index,
    };
  }

  /** DELETE /api/exams/:examId/questions/:id — xóa câu hỏi */
  async removeQuestion(examId: string, questionId: string): Promise<{ success: boolean; message: string }> {
    const existing = await this.prisma.question.findFirst({
      where: { id: questionId, exam_id: examId },
    });
    if (!existing) {
      throw new BusinessException(`Không tìm thấy câu hỏi với id: ${questionId}`);
    }
    await this.prisma.question.delete({ where: { id: questionId } });
    return { success: true, message: 'Xóa câu hỏi thành công' };
  }

  // ── Attempts ─────────────────────────────────────────────────────────────────

  /** POST /api/exams/:examId/attempts — bắt đầu làm bài */
  async startAttempt(payload: IStartAttemptRequest): Promise<IExamAttemptResponse> {
    const exam = await this.prisma.exam.findUnique({
      where: { id: payload.exam_id },
    });
    if (!exam) {
      throw new BusinessException(`Không tìm thấy bài thi với id: ${payload.exam_id}`);
    }
    if (!exam.is_published) {
      throw new BusinessException('Bài thi này chưa được phát hành');
    }
    if (!payload.student_name?.trim()) {
      throw new BusinessException('Họ tên thí sinh không được để trống');
    }
    if (!payload.student_email?.trim()) {
      throw new BusinessException('Email thí sinh không được để trống');
    }

    const attempt = await this.prisma.examAttempt.create({
      data: {
        exam_id: payload.exam_id,
        student_name: payload.student_name.trim(),
        student_email: payload.student_email.trim(),
      },
    });

    return {
      id: attempt.id,
      exam_id: attempt.exam_id,
      student_name: attempt.student_name,
      student_email: attempt.student_email,
      started_at: attempt.started_at,
      submitted_at: attempt.submitted_at,
      score: attempt.score,
      passed: attempt.passed,
    };
  }

  /** POST /api/attempts/:attemptId/submit — nộp bài và chấm điểm */
  async submitAttempt(
    attemptId: string,
    payload: ISubmitAttemptRequest,
  ): Promise<ISubmitAttemptResponse> {
    const attempt = await this.prisma.examAttempt.findUnique({
      where: { id: attemptId },
    });
    if (!attempt) {
      throw new BusinessException(`Không tìm thấy lần thi với id: ${attemptId}`);
    }
    if (attempt.submitted_at) {
      throw new BusinessException('Bài thi này đã được nộp trước đó');
    }

    // Lấy toàn bộ câu hỏi của bài thi để chấm điểm
    const questions = await this.prisma.question.findMany({
      where: { exam_id: attempt.exam_id },
    });

    const exam = await this.prisma.exam.findUnique({ where: { id: attempt.exam_id } });

    // Tính điểm từng câu
    let totalPoints = 0;
    let earnedPoints = 0;

    const answerRecords = questions.map((q) => {
      const submitted = payload.answers.find((a) => a.question_id === q.id);
      const studentAnswer = submitted?.answer ?? null;

      const isCorrect =
        q.correct_answer !== null && q.correct_answer !== undefined
          ? studentAnswer?.trim().toLowerCase() === q.correct_answer.trim().toLowerCase()
          : null; // short_answer không auto-chấm nếu không có correct_answer

      const pointsEarned = isCorrect ? q.points : 0;

      totalPoints += q.points;
      earnedPoints += pointsEarned;

      return {
        attempt_id: attemptId,
        question_id: q.id,
        answer: studentAnswer,
        is_correct: isCorrect,
        points_earned: pointsEarned,
      };
    });

    // Tính % điểm
    const score = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
    const passed = score >= (exam?.passing_score ?? 50);

    // Lưu câu trả lời và cập nhật attempt
    await this.prisma.$transaction([
      this.prisma.attemptAnswer.createMany({ data: answerRecords }),
      this.prisma.examAttempt.update({
        where: { id: attemptId },
        data: {
          submitted_at: new Date(),
          score,
          passed,
        },
      }),
    ]);

    return { attempt_id: attemptId, score, passed };
  }

  /** GET /api/attempts/:attemptId/result — xem kết quả chi tiết */
  async getResult(attemptId: string): Promise<IAttemptResultResponse> {
    const attempt = await this.prisma.examAttempt.findUnique({
      where: { id: attemptId },
      include: {
        answers: {
          include: { question: true },
          orderBy: { question: { order_index: 'asc' } },
        },
      },
    });

    if (!attempt) {
      throw new BusinessException(`Không tìm thấy lần thi với id: ${attemptId}`);
    }
    if (!attempt.submitted_at) {
      throw new BusinessException('Bài thi chưa được nộp');
    }

    const totalPoints = attempt.answers.reduce((sum, a) => sum + a.question.points, 0);
    const earnedPoints = attempt.answers.reduce((sum, a) => sum + a.points_earned, 0);

    return {
      attempt: {
        id: attempt.id,
        exam_id: attempt.exam_id,
        student_name: attempt.student_name,
        student_email: attempt.student_email,
        started_at: attempt.started_at,
        submitted_at: attempt.submitted_at,
        score: attempt.score,
        passed: attempt.passed,
      },
      answers: attempt.answers.map((a) => ({
        id: a.id,
        attempt_id: a.attempt_id,
        question_id: a.question_id,
        answer: a.answer,
        is_correct: a.is_correct,
        points_earned: a.points_earned,
        question: {
          id: a.question.id,
          exam_id: a.question.exam_id,
          content: a.question.content,
          question_type: a.question.question_type,
          options: (a.question.options as { id: string; text: string }[]) ?? null,
          correct_answer: a.question.correct_answer,
          explanation: a.question.explanation,
          points: a.question.points,
          order_index: a.question.order_index,
        },
      })),
      total_points: totalPoints,
      earned_points: earnedPoints,
    };
  }
}
