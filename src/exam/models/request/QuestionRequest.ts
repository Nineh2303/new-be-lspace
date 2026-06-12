// POST /api/exams/:examId/questions — tạo câu hỏi
export class ICreateQuestionRequest {
  content: string;
  question_type: 'multiple_choice' | 'true_false' | 'short_answer';
  options?: { id: string; text: string }[] | null;
  correct_answer?: string | null;
  explanation?: string | null;
  points?: number;
  order_index?: number;
}

// PUT /api/exams/:examId/questions/:id — cập nhật câu hỏi
export class IUpdateQuestionRequest {
  content?: string;
  question_type?: 'multiple_choice' | 'true_false' | 'short_answer';
  options?: { id: string; text: string }[] | null;
  correct_answer?: string | null;
  explanation?: string | null;
  points?: number;
  order_index?: number;
}
