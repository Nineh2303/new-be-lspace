import {
  HttpException,
  HttpExceptionOptions,
} from '@nestjs/common/exceptions/http.exception';

export declare class BusinessException extends HttpException {
  constructor(
    objectOrError?: any,
    descriptionOrOptions?: string | HttpExceptionOptions,
  );
}
