import { Router } from 'express';
import { UserController } from '../controllers/User.controller';

const router = Router();

const userController = new UserController();

router.post('/user', userController.handle);
router.get('/user/:id', userController.getUserById);
router.get('/user', userController.getAllUsers);

export default router;




