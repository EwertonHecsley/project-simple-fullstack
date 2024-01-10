import bcrypt from 'bcrypt';

export class HashPasswordService {
    public async hashPassword(password: string) {
        return await bcrypt.hash(password, 8);
    };

    public async comparePassword(password: string, passwordHash: string) {
        return await bcrypt.compare(password, passwordHash)
    };
};