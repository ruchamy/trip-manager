import { Request, Response } from "express";
import { SignalMessage } from "../dtos/signal/signal-message.dto";
import { SignalToSendDTO } from "../dtos/signal/signal-to-send.dto";
import { sendToClients } from "../socket/setupWebSocket";
import { handleSignal } from "../services/signalService";

export const postSignal = async (req: Request, res: Response) => {
    try {
        const body: SignalMessage = req.body;
        
        const obj: SignalToSendDTO = await handleSignal(body);

        sendToClients(obj);

        res.status(200).json({
            success: true
        });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};