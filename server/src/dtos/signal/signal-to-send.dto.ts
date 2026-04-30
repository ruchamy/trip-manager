import { Expose, Type } from "class-transformer";
import { ValidateNested } from "class-validator";

export class SignalToSendDTO {
    @Expose()
    key!: string;
    @Expose()
    @ValidateNested()
    location!: {
        lng: number
        lat: number,
    };
    tyme!: string
}
