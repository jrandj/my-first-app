import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as AuthActions from './auth.actions';
import { Injectable } from '@angular/core';

import { secrets } from '../../../environments/secrets';

export interface AuthResponseData {
    kind: string,
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean; // not used in sign-up request
}

@Injectable()
export class AuthEffects {
    @Effect()
    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + secrets.firebaseAPIKey,
                {
                    email: authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true
                }
            ).pipe(
                map(resData => {
                    const expirationDate = new Date(
                        new Date().getTime() + +resData.expiresIn * 1000
                    );
                    return of(
                        new AuthActions.Login({
                            email: resData.email,
                            userId: resData.localId,
                            token: resData.idToken,
                            expirationDate: expirationDate
                        })
                    );
                }),
                catchError(error => {
                    return of();
                })
            );
        })
    );

    constructor(private actions$: Actions, private http: HttpClient) {

    }

}
