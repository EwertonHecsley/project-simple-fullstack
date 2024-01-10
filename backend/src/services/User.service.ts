import { IUser } from "../interfaces/User.interface";
import { UserModel } from "../model/User.model";

export class UserService {
    private userModel: UserModel;

    constructor(userModel: UserModel) {
        this.userModel = userModel;
    }

    public async createUser(user: IUser) {
        const newUser = await this.userModel.createUser(user);
        return newUser;
    };
}