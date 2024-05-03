import { createReducer, on } from '@ngrx/store';
import { addUsers } from './user.action';
import { User } from './model/store';

export const initialState: User[] = [];

export const UserReducer = createReducer(
  initialState,
  on(addUsers['addUsers'], (state, { users }) => {
    state.push(users);
    return state;
  }),
  on(addUsers['getUsers'], (state) => ({ ...state })),
);
