import { Router } from 'express';
import { userController } from '../controllers/userController.js';
const UserRouter = new Router();
UserRouter.get('/', userController.getAll);
UserRouter.get('/:id', userController.getById);
UserRouter.post('/create', userController.create);
UserRouter.delete('/:id', userController.delete);
UserRouter.put('/:id', userController.update);
export { UserRouter };
