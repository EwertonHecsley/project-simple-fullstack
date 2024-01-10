import { Request, Response } from "express";
import { UserService } from "../services/User.service";

export class UserController {
    public async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const userService = new UserService();
        const user = await userService.createUser({ name, email, password });
        const { updatedAt: _, password: __, ...userFormated } = user;
        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: userFormated });

    };
    public async getAllUsers(_req: Request, res: Response) {
        const userService = new UserService();
        const users = await userService.getAllUsers();
        return res.json(users);
    };
};