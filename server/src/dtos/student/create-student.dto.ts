import { IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateStudentDTO {
  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @IsNotEmpty()
  @IsString()
  @Length(9, 9, { message: "Identity number must be exactly 9 characters long" })
  @Matches(/^\d+$/, { message: "Identity number must contain only digits" })
  identityNumber!: string;

  @IsString()
  className!: string;
}