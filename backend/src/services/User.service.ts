import { HttpException } from "../httExecption";
import { IUser } from "../interfaces/User.interface";
import { UserModel } from "../model/User.model";
import { HashPasswordService } from "../model/userService/HashSenha";
import { TokenUser } from "../model/userService/Token";

export class UserService {
    private userModel: UserModel;
    private passwordService: HashPasswordService;
    private tokenService: TokenUser;

    constructor() {
        this.userModel = new UserModel();
        this.passwordService = new HashPasswordService();
        this.tokenService = new TokenUser();
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

    public async loginUser(email: string, password: string) {
        const user = await this.userModel.getUserByEmail(email);
        if (!user) throw new HttpException(404, 'Usuário não encontrado.');

        const passwordMatch = await this.passwordService.comparePassword(password, user.password);
        if (!passwordMatch) throw new HttpException(401, 'Senha incorreta.');

        const token = await this.tokenService.generateToken(email);
        return token;
    }
}