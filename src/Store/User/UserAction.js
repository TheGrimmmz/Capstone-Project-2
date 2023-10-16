import { USER_ACTION_TYPES } from './UserTypes';
import { createAction } from '../../Utils/Reducer/Reducer';

/**
 * Creates an action to set the current user.
 *
 * @param {Object} user - The user object containing user details.
 * @return {Object} The action object with type and payload.
 */
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
