import { ActionReducerMap } from '@ngrx/store'
import * as fromStore from './user.reducer'
import { UserState } from './user.reducer'

export interface AllState {
  users : fromStore.UserState
}


export const reducer : ActionReducerMap<AllState>  = {
  users : fromStore.userReducer
}

