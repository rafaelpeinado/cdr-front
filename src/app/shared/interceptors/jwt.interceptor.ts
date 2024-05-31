import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const access_token = sessionStorage.getItem('access_token');
  const authToken = access_token ? JSON.parse(atob(access_token)) : null;
  if (req.url.includes('login')) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
    }
  })
  return next(authReq);
};
