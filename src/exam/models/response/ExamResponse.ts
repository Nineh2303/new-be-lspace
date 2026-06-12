// ─── Exam Response ────────────────────────────────────────────────────────────

export interface IExamResponse {
  id: string;
  title: string;
  description: string | null;
  time_limit_minutes: number | null;
  passing_score: number;
  is_published: boolean;
  created_at: Date;
  question_count?: number;
}

// ─── Question Response ────────────────────────────────────────────────────────

export interface IQuestionOption {
  id: string;
  text: string;
}

export interface IQuestionResponse {
  id: string;
  exam_id: string;
  content: string;
  question_type: string;
  options: IQuestionOption[] | null;
  correct_answer: string | null;
  explanation: string | null;
  points: number;
  order_index: number;
}

// ─── Attempt Response ─────────────────────────────────────────────────────────

export interface IExamAttemptResponse {
  id: string;
  exam_id: string;
  student_name: string;
  student_email: string;
  started_at: Date;
  submitted_at: Date | null;
  score: number | null;
  passed: boolean | null;
}

export interface IAttemptAnswerResponse {
  id: string;
  attempt_id: string;
  question_id: string;
  answer: string | null;
  is_correct: boolean | null;
  points_earned: number;
  question: IQuestionResponse;
}

export interface IAttemptResultResponse {
  attempt: IExamAttemptResponse;
  answers: IAttemptAnswerResponse[];
  total_points: number;
  earned_points: number;
}

export interface ISubmitAttemptResponse {
  attempt_id: string;
  score: number;
  passed: boolean;
}
