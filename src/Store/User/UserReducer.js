import { createSlice } from '@reduxjs/toolkit';
import { USER_ACTION_TYPES } from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
};

//redux toolkit comment out
// export const  userSlice = createSlice({
//   name: 'user',
//   initialState: INITIAL_STATE,
//   reducers: {
//     setCurrentUser(state, action){
//       state.currentUser = action.payload
//     }
//   }
// })

// export const {seCurrentUser} = userSlice.actions;

// export const userReducerNew = userSlice.reducer;
//to here

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
