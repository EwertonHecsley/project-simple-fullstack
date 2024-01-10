import { Router } from 'express';
import { UserController } from '../controllers/User.controller';
import { UserService } from '../services/User.service';
import { PrismaService } from '../model/userService/user';
import { UserModel } from '../model/User.model';

const router = Router();

const prismaService = new PrismaService();
const userModel = new UserModel(prismaService);
const userService = new UserService(userModel);
const userController = new UserController(userService);

router.post('/user', userController.create);

export default router;

