import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes/user.routes';
import { httpErrorMiddleware } from './middlewares/Http.Exception';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', router);

app.use(httpErrorMiddleware);


export default app;