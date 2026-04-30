import { Transform } from "class-transformer";
import { IsDateString, IsNotEmpty, IsObject, IsString, Length, Matches } from "class-validator"

export class SignalMessage {
    @Transform(({ value }) => String(value))
    @IsNotEmpty()
    @Length(9, 9, { message: "Identity number must be exactly 9 characters long" })
    @Matches(/^\d+$/, { message: "Identity number must contain only digits" })
    ID!: string;

    @IsNotEmpty()
    @IsObject()
    Coordinates!: {
        Longitude: { Degrees: string, Minutes: string, Seconds: string },
        Latitude: { Degrees: string, Minutes: string, Seconds: string }
    }

    @IsNotEmpty()
    @IsDateString()
    Time!: string //"YYYY-MM-DDTHH:MM:SSZ"
}