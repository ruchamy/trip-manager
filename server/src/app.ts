import express, { Application } from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes';
import teacherRoutes from './routes/teacherRoutes';
import signalRouter from './routes/signalRoutes';

const app: Application = express();

app.use(express.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use("/signal", signalRouter);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
export default app;