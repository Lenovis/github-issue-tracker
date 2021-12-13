export type Issue = {
  id: number;
};

export type IssueRequest = {
  owner: string;
  repo: string;
  page?: number;
};
