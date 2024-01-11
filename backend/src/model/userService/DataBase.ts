import { PrismaClient } from '@prisma/client';
import { IUser } from '../../interfaces/User.interface';
const prismaService = new PrismaClient();

export class PrismaService {
    public async createUser(user: IUser) {
        return await prismaService.users.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
    };

    public async getAllUsers() {
        return await prismaService.users.findMany();
    };

    public async getUserByEmail(email: string) {
        return await prismaService.users.findUnique({
            where: {
                email
            }
        });
    };

    public async getUserById(id: number) {
        return await prismaService.users.findUnique({
            where: {
                id
            }
        });
    };
}