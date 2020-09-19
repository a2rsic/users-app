import { api } from "../config/API";

class UserService {
  async fetchUsers() {
    const path = "users";
    const response = await api.get(path);
    return response;
  }
}

export const userService = new UserService();
