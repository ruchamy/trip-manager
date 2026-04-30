import { useState, useEffect } from "react";
import type { Poi } from "../types/poi";

interface UseWebSocketLiteProps {
    socketUrl: string;
    retry?: number;
    retryInterval?: number;
}
export default function useWebSocketLite({
    socketUrl,
    retry: defaultRetry = 3,
    retryInterval = 1500,
}: UseWebSocketLiteProps) {
    const [data, setData] = useState<Poi | undefined>(undefined);

    const [retry, setRetry] = useState<number>(defaultRetry);
    const [readyState, setReadyState] = useState<boolean>(false);

 useEffect(() => {
    let ws: WebSocket;
    let timeout: any;

    const connect = () => {
        ws = new WebSocket(socketUrl);

        ws.onopen = () => {
            console.log("התחבר ל-WebSocket");
            setRetry(defaultRetry);
            setReadyState(true);
        };

        ws.onmessage = (event: MessageEvent) => {
            const msg = formatMessage(event.data);
            setData(msg as Poi);
        };

        ws.onclose = () => {
            setReadyState(false);

            if (retry > 0) {
                timeout = setTimeout(() => {
                    setRetry((prev) => prev - 1);
                }, retryInterval);
            }
        };
    };

    connect();

    return () => {
        console.log("סגור");
        
        ws?.close();
        clearTimeout(timeout);
    };
}, [socketUrl]);

    return { data, readyState };
}

// ניסיון להמיר JSON לאובייקט
function formatMessage(data: any): object {
    try {
        return JSON.parse(data);
    } catch {
        return data;
    }
}