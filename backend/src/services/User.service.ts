import { IUser } from "../interfaces/User.interface";
import { UserModel } from "../model/User.model";
import { HashPasswordService } from "../model/userService/HashSenha";

export class UserService {
    private userModel: UserModel;
    private passwordService: HashPasswordService;

    constructor() {
        this.userModel = new UserModel();
        this.passwordService = new HashPasswordService();
    }
    public async createUser(user: IUser) {
        const passwordHash = await this.passwordService.hashPassword(user.password);
        const newUser = await this.userModel.createUser({ name: user.name, email: user.email, password: passwordHash });
        return newUser;
    }

    public async getAllUsers() {
        return await this.userModel.getAllUsers();
    }
}