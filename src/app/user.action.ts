import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from './model/store';

export const addUsers = createActionGroup({
  source: 'Users',
  events: {
    addUsers: props<{ users: User }>(),
    getUsers: emptyProps(),
  },
});
