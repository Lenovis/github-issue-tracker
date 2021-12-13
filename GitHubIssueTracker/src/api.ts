import axios from 'axios';
import { config } from './config';
import { Issue } from './types';

type Status = {
  status: boolean;
};

export default class Api {
  static get = async <T>(endpoint: string) => {
    const url = config.BASE_URL + endpoint;

    return axios.get<T>(url);
  };

  static getRepoIssues = async (owner: string, repo: string, page = 1) =>
    Api.get<Issue[] & Status>(`repos/${owner}/${repo}/issues?page=${page}`);
}
