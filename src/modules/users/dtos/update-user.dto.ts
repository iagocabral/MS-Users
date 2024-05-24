import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email?: string;  // O campo email deve ser um email válido

    @IsOptional()
    @IsString()
    name?: string;  // O campo nome deve ser uma string

    @IsOptional()
    @IsString()
    @MinLength(8)
    password?: string;  // O campo senha deve ser uma string e ter pelo menos 8 caracteres
}
