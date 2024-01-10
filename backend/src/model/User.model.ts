import { IUser } from "../interfaces/User.interface";
import { PrismaService } from "./userService/user";

export class UserModel {
    private prismaService: PrismaService;

    constructor(prismaService: PrismaService) {
        this.prismaService = prismaService;
    }

    public async createUser(user: IUser) {
        return await this.prismaService.createUser(user);
    }
}