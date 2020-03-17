import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus } from "@nestjs/common";
import { Request, Response } from 'express';


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        let message = exception.message;

        if (status === HttpStatus.UNAUTHORIZED) {
            message = exception.message || 'You do not have permission to access this resource'
        }
        if (exception instanceof HttpException) {
            message = exception.message || 'Internal Server Error...!'
        }






        response.status(status).json({
            Status: status,
            messenger: message,
            path: request.url,
            timestap: new Date().toString(),



        });

    }

}