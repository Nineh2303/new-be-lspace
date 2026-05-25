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

    // Decrypt request payload
    if (req.body && req.body.data) {
      req.body = decryptPayload(req.body.data);
    }
    // const decrypted: string = decryptPayload(req.body.data);
    // if (decrypted) {
    //   req.body = decrypted;
    // }
    return next.handle().pipe(
      map((data: any) => {
        // Skip encryption if no data or data is already a string (e.g., HTML response)
        if (data === undefined || data === null || typeof data === 'string')
          return data;

        // Encrypt the response payload
        const encryptedData = encryptPayload(data);
        return { data: encryptedData };
      }),
    );
  }
}

export default CryptoInterceptor;
