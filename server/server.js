import express from 'express';
import cors from 'cors';
import { dataBase } from './db.js';
import { User, WalletUser } from './models/model.js';
import { router } from './routes/router.js';
import { errorMiddleware } from './middleware/errorHandlingMiddleware.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await dataBase.authenticate();
    await dataBase.sync();
    app.listen(5000, () => {
      console.log(`Hello Server `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
