import { api } from "../config/API";

class RepoService {
  async fetchRepos(userName) {
    const path = `${userName}/repos`;
    const response = await await api.get(path);
    return response;
  }
}

export const repoService = new RepoService();
