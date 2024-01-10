import { IUser } from "../interfaces/User.interface";
import { PrismaService } from "./userService/user";

export class UserModel {
    public async createUser(user: IUser) {
        const userPrismaService = new PrismaService();
        return await userPrismaService.createUser(user);
    }
}