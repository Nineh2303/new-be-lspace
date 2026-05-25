import { Request } from 'express';
export interface IEncryptedRequestBody {
  data: string;
}
export interface DecryptedRequest<T> extends Request {
  body: T;
}
