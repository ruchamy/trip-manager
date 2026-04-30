import { Router } from "express";
import { postSignal } from "../controllers/signalController";
import { validateDTO } from "../middleware/validate-dto.middleware";
import { SignalMessage } from "../dtos/signal/signal-message.dto";

const router = Router();

router.post("/",validateDTO(SignalMessage), postSignal);

export default router;