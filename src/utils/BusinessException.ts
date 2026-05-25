import { HttpException } from '@nestjs/common/exceptions/http.exception';

export declare class BusinessException extends HttpException {
  errorCode?: any;
  errorMessage?: string;
  constructor(errorCode?: any, errorMessage?: string);
}
