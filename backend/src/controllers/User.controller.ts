import { Request, Response } from "express";
import { UserService } from "../services/User.service";

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }
    public async create(req: Request, res: Response) {

        const { name, email, password } = req.body;
        const newUser = await this.userService.createUser({ name, email, password });

        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.', usuario: newUser });
    };
};