export type User = {
  isLogined: boolean;
  login: string;
};

export interface UserLoginResponse {
  user: User;
}

export interface AllAuntificatedUsers {
  users: User[];
}

export interface UserLoginRequest {
  user: {
    login: string;
    password: string;
  };
}
