import { USER_ACTION_TYPES } from './UserTypes';
import { createAction } from '../../Utils/Reducer/Reducer';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
