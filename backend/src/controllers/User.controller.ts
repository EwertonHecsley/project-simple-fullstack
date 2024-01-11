import { Request, Response } from "express";
import { UserService } from "../services/User.service";
import { createUserSchema } from "../schemas/user.schema";
import { ZodError } from "zod";

export class UserController {
    public async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            await createUserSchema.parseAsync(req.body);
        } catch (error) {
            if (error instanceof ZodError) return res.status(400).json({ mensagem: error.issues[0].message });
        }

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