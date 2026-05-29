// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   Logger,
//   NestInterceptor,
// } from '@nestjs/common';
// import { tap } from 'rxjs';
//
// @Injectable()
// export class LoggingInterceptor implements NestInterceptor {
//   private readonly logger = new Logger(LoggingInterceptor.name);
//   intercept(context: ExecutionContext, next: CallHandler) {
//     const req = context.switchToHttp().getRequest();
//     const start = Date.now();
//     return next.handle().pipe(
//       tap(() => {
//         const duration = Date.now() - start;
//         this.logger.log({
//           requestId: req.requestId,
//
//           userId: req.user?.id,
//
//           method: req.method,
//
//           url: req.url,
//
//           duration,
//         });
//       }),
//     );
//   }
// }
