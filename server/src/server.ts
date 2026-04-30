import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
import app from './app';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';
import { setupWebSocket } from "./socket/setupWebSocket";
import http from "http";
const PORT: number = Number(process.env.PORT) || 3000;
const server = http.createServer(app);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        setupWebSocket(server);

        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection error", err);
    });

