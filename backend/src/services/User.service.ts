import { HttpException } from "../httExecption";
import { IUser } from "../interfaces/User.interface";
import { UserModel } from "../model/User.model";
import { HashPasswordService } from "../model/userService/HashSenha";

export class UserService {
    private userModel: UserModel;
    private passwordService: HashPasswordService;

    constructor() {
        this.userModel = new UserModel();
        this.passwordService = new HashPasswordService();
    };
    public async createUser(user: IUser) {
        const emailExist = await this.userModel.getUserByEmail(user.email);
        if (emailExist) throw new HttpException(400, 'Email já cadastrado no banco de dados.');

        const passwordHash = await this.passwordService.hashPassword(user.password);
        const newUser = await this.userModel.createUser({ name: user.name, email: user.email, password: passwordHash });
        return newUser;
    };

    public async getAllUsers() {
        return await this.userModel.getAllUsers();
    };

    public async getUserById(id: number) {
        const user = await this.userModel.getUserById(id);
        if (!user) throw new HttpException(404, 'Usuário não encontrado.');
        return user;
    };
}