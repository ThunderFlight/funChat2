export interface AutheticationUser<T> {
  id: string;
  type: string;
  payload: T;
}
