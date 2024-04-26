export interface AutheticationUser {
  id: string;
  type: string;
  payload: {
    user: {
      login: string;
      isLogined: boolean;
    };
  };
}
