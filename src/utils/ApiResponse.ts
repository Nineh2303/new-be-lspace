export class ApiResponse<T> {
  isError: boolean = false;
  message?: string;
  object?: T;
  error?: unknown;

  constructor(isError: boolean, object?: T, message?: string, error?: unknown) {
    this.isError = isError;
    this.object = object;
    this.message = message;
    this.error = error;
  }
  static success<T>(object?: T, message = 'Success'): ApiResponse<T> {
    return new ApiResponse(false, object, message);
  }

  static fail(message = 'Failed'): ApiResponse<null> {
    return new ApiResponse(true, null, message);
  }
}
