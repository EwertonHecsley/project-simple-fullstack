import 'dotenv/config';
import jwt, { Secret } from 'jsonwebtoken';
import { UserModel } from '../User.model';

export class TokenUser {
    userModelService: UserModel;

    constructor() {
        this.userModelService = new UserModel();
    };
    public async generateToken(email: string): Promise<string> {
        const data = await this.userModelService.getUserByEmail(email);
        const token = jwt.sign({ id: data?.id, email: data?.email }, process.env.SECRET_KEY_JWT as Secret);
        return token;
    };

    public async verifyToken(token: string) {
        return jwt.verify(token, process.env.SECRET_KEY_JWT as Secret);
    };
}