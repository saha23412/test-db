import { Router } from 'express';
import { walletController } from '../controllers/walletController.js';
const WalletUserRouter = new Router();
WalletUserRouter.get('/:id', walletController.getById);
export { WalletUserRouter };
