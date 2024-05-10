import { createReducer, on } from '@ngrx/store';
import { usersActions } from './user.action';
import { User } from './model/store';

interface ChatState {
  users: User[];
}

export const initialState: ChatState = {
  users: [],
};

export const ChatReducer = createReducer(
  initialState,
  on(usersActions.addUsersSuccess, (state, { users }): ChatState => {
    return { ...state, ...users };
  }),
  on(usersActions.getUsers, (state) => {
    return { ...state };
  }),
  on(usersActions.addUsers, (state, { users }) => {
    if (Array.isArray(users)) {
      users.forEach((user) => state.users.push(user));
    } else {
      state.users.push(users);
    }
    return { ...state, ...users };
  }),
);
