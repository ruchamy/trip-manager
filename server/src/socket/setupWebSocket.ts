import { Server as HttpServer, IncomingMessage } from "http";
import { Socket } from "net";
import WebSocket, { WebSocketServer } from "ws";
import { SignalToSendDTO } from "../dtos/signal/signal-to-send.dto";

let wss: WebSocketServer;

export function setupWebSocket(server: HttpServer): void {
    wss = new WebSocketServer({ noServer: true });

    server.on("upgrade", (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit("connection", ws, request);
        });
    });

    wss.on("connection", (client) => {
        client.send(
            JSON.stringify({
                type: "connected",
                message: "מחובר לשרת",
            })
        );

        client.on("close", () => {
            console.log("לקוח התנתק");
        });
    });
}

export function sendToClients(data: SignalToSendDTO) {    
    if (!wss) return;

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}