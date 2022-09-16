import { User } from "../types/user.types";
import { usersService } from "./user.service";

async function login(uid: string) {
  const user = await usersService.getUserByUID(uid);
  return user;
}

async function signup(data: Partial<User>) {
  const newUser = await usersService.addUser(data);
  return newUser;
}

export const authService = {
  login,
  signup,
};
