import { environment } from "../../environments/environment.development";

export const urlsConfig = Object.freeze({
  AUTH_SINGUP: `${environment.BASE_URL}/auth/signup`,
  AUTH_LOGIN: `${environment.BASE_URL}/auth/login`,
  USERS: `${environment.BASE_URL}/users`,
});
