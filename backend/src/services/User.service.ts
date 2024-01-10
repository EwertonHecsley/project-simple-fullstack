import { IUser } from "../interfaces/User.interface";
import { UserModel } from "../model/User.model";

export class UserService {
    public async createUser(user: IUser) {
        const userModelService = new UserModel();
        const newUser = await userModelService.createUser(user);
        const { updatedAt: _, ...userFormated } = newUser;
        return userFormated;
    }
}