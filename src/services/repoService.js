import { api } from "../config/API";

class RepoService {
  async fetchRepos(userName) {
    const path = `users/${userName}/repos`;
    const response = await await api.get(path);
    return response;
  }

  async fetchRepo(username, reponame) {
    const path = `repos/${username}/${reponame}`;
    const response = await await api.get(path);
    return response;
  }
}

export const repoService = new RepoService();
