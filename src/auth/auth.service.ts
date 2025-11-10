import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signIn() {
    return { msg: "I'm signing in!" };
  }

  signUp() {
    return { msg: "I'm signing up!" };
  }
}
