import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { decryptPayload, encryptPayload } from '../utils/crypto';
import { Request } from 'express';

@Injectable()
class CryptoInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    if (req.body?.data) {
      req.body = decryptPayload(req.body.data as string);
    }
    return next.handle().pipe(
      map((data: any) => {
        if (data === undefined || data === null || typeof data === 'string')
          return data;
        const encryptedData = encryptPayload(data);
        return { data: encryptedData };
      }),
    );
  }
}

export default CryptoInterceptor;
