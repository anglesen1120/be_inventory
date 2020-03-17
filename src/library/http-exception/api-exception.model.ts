import { ApiPropertyOptional } from '@nestjs/swagger';


export class ApiException {
    @ApiPropertyOptional() Status?: number;
    @ApiPropertyOptional() message?: string;
    @ApiPropertyOptional() status?: string;
    @ApiPropertyOptional() error?: string;
    @ApiPropertyOptional() errors?: any;
    @ApiPropertyOptional() timestamp?: string;
    @ApiPropertyOptional() path?: string;
}