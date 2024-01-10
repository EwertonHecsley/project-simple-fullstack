import { Request, Response } from "express";
import { UserService } from "../services/User.service";

export class UserController {
    public async handle(req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.createUser(req.body);
        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: user });
    }
};