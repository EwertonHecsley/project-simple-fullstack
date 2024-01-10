import { IUser } from "../interfaces/User.interface";
import { UserModel } from "../model/User.model";

export class UserService {
    private userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
    }
    public async createUser(user: IUser) {
        const newUser = await this.userModel.createUser(user);
        const { updatedAt: _, ...userFormated } = newUser;
        return userFormated;
    }

    public async getAllUsers() {
        return await this.userModel.getAllUsers();
    }
}