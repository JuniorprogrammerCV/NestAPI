import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
    signIn() {
        return { msg: "I'm signing in!" };
    }

    signUp() {
       return {msg: "I'm signing up!"};
    }
}
