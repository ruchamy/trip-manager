import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });
import app from './app';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';

const PORT: number = Number(process.env.PORT) || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection error", err);
    });

