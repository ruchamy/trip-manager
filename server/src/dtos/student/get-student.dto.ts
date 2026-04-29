import { Expose, Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { Class } from "server/src/entities/Class";

export class GetStudentDTO {
  @Expose()
  id!: number;
  @Expose()
  firstName!: string;
  @Expose()
  lastName!: string;
  @Expose()
  identityNumber!: string;

  @Expose()
  @Type(() => Class)
  @ValidateNested()
  class!: {
    id: number;
    name: string;
  };
}