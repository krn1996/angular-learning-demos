import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../models/user.model";
import { AllState } from "../reducers";
import { UserState } from "../reducers/user.reducer";

function getAllState(state: AllState): AllState {
  return state;
}
// export const getUsertate = createSelector(getAppState, fetchVehicleState);
const fetchUser = function (state: AllState) {
  return state.users.data;
};



export const InitialUsers = createSelector( getAllState, fetchUser);
