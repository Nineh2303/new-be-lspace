import { HttpException } from '@nestjs/common/exceptions/http.exception';

export declare class BussinessException extends HttpException {
  ErrorCode: string;
  Message: string;
}
