import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of, forkJoin } from "rxjs";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError, tap } from "rxjs"
import { getAllSuccess, getAllUsers, UserActionTypes } from "../actions/user.action";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

    getUsers$ : Observable<Action> = createEffect(()=>
      this.actions$.pipe(
        ofType(UserActionTypes.LOAD_USERS),
        switchMap((action: any) =>
        this.userService.getData()
        .pipe(
          map((action: any) => new getAllSuccess(action.data))
        )
      )
      )
    )

}
