import { IUser } from "../interfaces/User.interface";
import { PrismaService } from "./userService/user";

export class UserModel {
    private prismaService: PrismaService

    constructor() {
        this.prismaService = new PrismaService()
    }
    public async createUser(user: IUser) {
        return await this.prismaService.createUser(user);
    }

    public async getAllUsers() {
        return await this.prismaService.getAllUsers();
    }
}