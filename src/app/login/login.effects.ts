import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators"
import { recoverPassword, recoverPasswordSuccess } from "src/store/login/login.actions";

@Injectable()
export class LoginEffects {

    constructor(private actions$: Actions) {

    }

    recoverPassword$ = createEffect(() => this.actions$.pipe(
        ofType(recoverPassword),
        map(() => recoverPasswordSuccess())
    ))

}