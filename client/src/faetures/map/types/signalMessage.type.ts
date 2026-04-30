export type SignalMessage = {
    Id: string
    Coordinates: {
        Longitude: { Degrees: number, Minutes: number, Seconds: number },
        Latitude: { Degrees: number, Minutes: number, Seconds: number }
    }
    Time: string //"YYYY-MM-DDTHH:MM:SSZ"
}