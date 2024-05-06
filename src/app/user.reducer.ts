import { createReducer, on } from '@ngrx/store';
import { usersActions } from './user.action';
import { UserLoginResponse } from './model/store';

interface ChatState {
  users: UserLoginResponse[];
}

export const initialState: ChatState = {
  users: [],
};

export const ChatReducer = createReducer(
  initialState,
  on(usersActions.addUsersSuccess, (state, { users }): ChatState => {
    return { ...state, ...users };
  }),
  on(usersActions.getUsers, (state) => state),
);
