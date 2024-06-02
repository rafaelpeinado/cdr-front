import { Injectable } from '@angular/core';
import { LoginUserDTO } from '../dtos/login-user.dto';
import { Observable, take, tap } from 'rxjs';
import { urlsConfig } from '../urls.config';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/login-response.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
  ) { }

  public authenticate(loginUserDTO: LoginUserDTO): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(urlsConfig.AUTH_LOGIN, loginUserDTO)
      .pipe(
        take(1),
        tap((loginResponse: LoginResponse) => {
          sessionStorage.setItem('access_token', btoa(JSON.stringify(loginResponse.token)));
        }),
      );
  }

  public isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  public logout() {
    sessionStorage.removeItem('access_token');
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(urlsConfig.USERS).pipe(take(1));
  }

  public getAccessToken(): string | null {
    const access_token = sessionStorage.getItem('access_token');
    return access_token ? JSON.parse(atob(access_token)) : null;
  }
}
