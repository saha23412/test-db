import { Router } from 'express';
import { UserRouter } from './userRouter.js';
import { WalletUserRouter } from './walletUserRouter.js';
export const router = new Router();
router.use('/user', UserRouter);
router.use('/wallet', WalletUserRouter);
