import { IsString, IsNotEmpty } from "class-validator";

export class LoginTeacherDTO {
  @IsString()
  @IsNotEmpty()
  identityNumber!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}