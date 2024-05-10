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

export interface MessageRequest {
  id: string;
  type: 'MSG_SEND';
  payload: {
    message: {
      to: string;
      text: string;
    };
  };
}

export interface MessageResponse {
  id: string;
  type: 'MSG_SEND';
  payload: {
    message: {
      id: string;
      from: string;
      to: string;
      text: string;
      datetime: number;
      status: {
        isDelivered: boolean;
        isReaded: boolean;
        isEdited: boolean;
      };
    };
  };
}
