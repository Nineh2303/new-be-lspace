// POST /api/exams/:examId/attempts — bắt đầu làm bài
export class IStartAttemptRequest {
  exam_id: string;
  student_name: string;
  student_email: string;
}

// Một câu trả lời trong payload nộp bài
export class ISubmitAnswerItem {
  question_id: string;
  answer: string | null;
}

// POST /api/attempts/:attemptId/submit — nộp bài
export class ISubmitAttemptRequest {
  attempt_id: string;
  answers: ISubmitAnswerItem[];
}
