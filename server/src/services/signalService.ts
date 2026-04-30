import { SignalMessage } from "../dtos/signal/signal-message.dto";
import { SignalToSendDTO } from "../dtos/signal/signal-to-send.dto";

export const handleSignal = async (signal: SignalMessage): Promise<SignalToSendDTO> => {
    const obj = new SignalToSendDTO();
    obj.key = signal.ID;
    obj.tyme = signal.Time;
    const Longitude = signal.Coordinates.Longitude
    const Latitude = signal.Coordinates.Latitude
    obj.location = {
        lng:
            Number(Longitude.Degrees) +
            Number(Longitude.Minutes) / 60 +
            Number(Longitude.Seconds) / 3600,

        lat:
            Number(Latitude.Degrees) +
            Number(Latitude.Minutes) / 60 +
            Number(Latitude.Seconds) / 3600,
    };
    return obj;
};
