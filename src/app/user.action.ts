import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserLoginResponse } from './model/store';

export const usersActions = createActionGroup({
  source: 'Users',
  events: {
    'Add Users': props<{ users: UserLoginResponse | UserLoginResponse[] }>(),
    'Add Users Success': props<{ users: UserLoginResponse[] }>(),
    'Get Users': emptyProps(),
  },
});
