import { Action } from "@ngrx/store";
import { User } from "../models/user.model";


export enum UserActionTypes {
   LOAD_USERS = '[USERS] Load Users',
   LOAD_USERS_SUCCESS = '[USERS] Load Users Success',
   LOAD_USERS_FAIL = '[USERS] Load Users Fail'
}

export class getAllUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
  constructor(public payload?: User[]) {}
}

export class getAllSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload?: User[]) {}
}

export class getAllUsersFail implements Action {
  readonly type = UserActionTypes.LOAD_USERS_FAIL;
  constructor(public payload?: User[]) {}
}

export type UserAction = getAllUsers | getAllSuccess | getAllUsersFail
