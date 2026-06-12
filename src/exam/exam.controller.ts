import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { ICreateExamRequest, IUpdateExamRequest } from './models/request/ExamRequest';
import { ICreateQuestionRequest, IUpdateQuestionRequest } from './models/request/QuestionRequest';
import { IStartAttemptRequest, ISubmitAttemptRequest } from './models/request/AttemptRequest';

@Controller('api')
export class ExamController {
  constructor(
    @Inject(ExamService) private readonly examService: ExamService,
  ) {}

  // ── Exam ────────────────────────────────────────────────────────────────────

  /** GET /api/exams — danh sách bài thi đã published (học sinh) */
  @Get('exams')
  async getExams() {
    return this.examService.findAllPublished();
  }

  /** GET /api/exams/all — tất cả bài thi kể cả nháp (admin) */
  @Get('exams/all')
  async getAllExams() {
    return this.examService.findAll();
  }

  /** GET /api/exams/:id — chi tiết bài thi */
  @Get('exams/:id')
  async getExamById(@Param('id') id: string) {
    return this.examService.findOne(id);
  }

  /** POST /api/exams — tạo bài thi mới */
  @Post('exams')
  async createExam(@Body() payload: ICreateExamRequest) {
    return this.examService.create(payload);
  }

  /** PUT /api/exams/:id — cập nhật bài thi */
  @Put('exams/:id')
  async updateExam(@Param('id') id: string, @Body() payload: IUpdateExamRequest) {
    return this.examService.update(id, payload);
  }

  /** DELETE /api/exams/:id — xóa bài thi */
  @Delete('exams/:id')
  async deleteExam(@Param('id') id: string) {
    return this.examService.remove(id);
  }

  // ── Questions ────────────────────────────────────────────────────────────────

  /** GET /api/exams/:examId/questions — câu hỏi (ẩn đáp án) */
  @Get('exams/:examId/questions')
  async getQuestions(@Param('examId') examId: string) {
    return this.examService.findQuestions(examId, true);
  }

  /** POST /api/exams/:examId/questions — thêm câu hỏi */
  @Post('exams/:examId/questions')
  async createQuestion(
    @Param('examId') examId: string,
    @Body() payload: ICreateQuestionRequest,
  ) {
    return this.examService.createQuestion(examId, payload);
  }

  /** PUT /api/exams/:examId/questions/:id — cập nhật câu hỏi */
  @Put('exams/:examId/questions/:id')
  async updateQuestion(
    @Param('examId') examId: string,
    @Param('id') questionId: string,
    @Body() payload: IUpdateQuestionRequest,
  ) {
    return this.examService.updateQuestion(examId, questionId, payload);
  }

  /** DELETE /api/exams/:examId/questions/:id — xóa câu hỏi */
  @Delete('exams/:examId/questions/:id')
  async deleteQuestion(
    @Param('examId') examId: string,
    @Param('id') questionId: string,
  ) {
    return this.examService.removeQuestion(examId, questionId);
  }

  // ── Attempts ─────────────────────────────────────────────────────────────────

  /** POST /api/exams/:examId/attempts — bắt đầu làm bài */
  @Post('exams/:examId/attempts')
  async startAttempt(
    @Param('examId') examId: string,
    @Body() payload: IStartAttemptRequest,
  ) {
    return this.examService.startAttempt({ ...payload, exam_id: examId });
  }

  /** POST /api/attempts/:attemptId/submit — nộp bài */
  @Post('attempts/:attemptId/submit')
  async submitAttempt(
    @Param('attemptId') attemptId: string,
    @Body() payload: ISubmitAttemptRequest,
  ) {
    return this.examService.submitAttempt(attemptId, payload);
  }

  /** GET /api/attempts/:attemptId/result — xem kết quả */
  @Get('attempts/:attemptId/result')
  async getAttemptResult(@Param('attemptId') attemptId: string) {
    return this.examService.getResult(attemptId);
  }
}
