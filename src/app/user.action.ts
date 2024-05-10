import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AllAuntificatedUsers, User, UserLoginResponse } from './model/store';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Add Users': props<{ users: User | User[] }>(),
    'Add Users Success': props<{
      users: AllAuntificatedUsers | UserLoginResponse;
    }>(),
    'Get Users': emptyProps(),
  },
});
