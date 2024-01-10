import { Request, Response } from "express";
import { UserService } from "../services/User.service";

export class UserController {
    public async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const userService = new UserService();
        const user = await userService.createUser({ name, email, password });
        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: user });
    }

    public async getAllUsers(_req: Request, res: Response) {
        const userService = new UserService();
        const users = await userService.getAllUsers();
        return res.json(users);
    }
};