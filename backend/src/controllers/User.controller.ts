import { Request, Response } from "express";
import { UserService } from "../services/User.service";
import { createUserSchema } from "../schemas/user.schema";
import { ZodError } from "zod";
import { loginSchema } from "../schemas/login.schema";

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
        const restult = users.map((user) => {
            const { password: _, ...userFormated } = user;
            return userFormated;
        })
        return res.json(restult);
    };

    public async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        const userService = new UserService();
        const user = await userService.getUserById(parseInt(id));
        const { password: _, ...result } = user;
        return res.json(result);
    };

    public async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            await loginSchema.parseAsync(req.body);
        } catch (error) {
            if (error instanceof ZodError) return res.status(401).json({ mensagem: error.issues[0].message });
        };

        const userService = new UserService();
        const result = await userService.loginUser(email, password);
        return res.json({ mensagem: 'Usuário logado com sucesso.', token: result });

    }
};