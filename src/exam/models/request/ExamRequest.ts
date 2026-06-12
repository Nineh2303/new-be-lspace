// POST /api/exams — tạo bài thi mới
export class ICreateExamRequest {
  title: string;
  description?: string | null;
  time_limit_minutes?: number | null;
  passing_score: number;
  is_published?: boolean;
}

// PUT /api/exams/:id — cập nhật bài thi
export class IUpdateExamRequest {
  title?: string;
  description?: string | null;
  time_limit_minutes?: number | null;
  passing_score?: number;
  is_published?: boolean;
}
