import { ActionReducerMap } from '@ngrx/store';
import { UserAction, UserActionTypes } from '../actions/user.action';
import { User } from '../models/user.model';

export interface UserState {
  data: User[];
  loading: boolean;
  loaded: boolean;
  error: null | undefined | string | Array<User>;
}

export const InitialState: UserState = {
  data: [],
  loading: true,
  loaded: false,
  error: null,
};

export function userReducer(
  state: UserState = InitialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    }
    case UserActionTypes.LOAD_USERS_SUCCESS: {
      const data = action.payload
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        data,
      };
    }
    case UserActionTypes.LOAD_USERS_FAIL: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: action.payload,
      };
    }

    default :
      return state

  }
}
