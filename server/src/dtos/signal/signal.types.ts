export type SignalMessage = {
    type: "signal";
    payload: {
        sender: string;
        target: string;
        data: string;
    };
};