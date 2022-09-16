import { userModel } from "../models/user.model";
import { User } from "../types/user.types";

async function getUsers() {
  const users = await userModel.find();
  return users;
}

async function getUser(id: string) {
  const user = await userModel.findById(id);
  return user;
}

async function getUserByUID(uid: string) {
  const user = await userModel.findOne({ uid }).lean();
  return user;
}

async function addUser(data: Partial<User>) {
  const newUser = await userModel.create(data);
  return newUser;
}

async function updateUser(id: string, data: Partial<User>) {
  const updatedUser = await userModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedUser;
}

async function deleteUser(id: string) {
  return await userModel.findByIdAndDelete(id);
}

export const usersService = {
  getUsers,
  getUser,
  getUserByUID,
  addUser,
  updateUser,
  deleteUser,
};
