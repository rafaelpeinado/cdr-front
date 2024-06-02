import { AuthService } from './shared/services/auth.service';
import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function getAccessToken() {
  const authService = inject(AuthService);
  return authService.getAccessToken();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi(),
    ),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: getAccessToken,
          disallowedRoutes: ['login'],
        },
      }),
    ),
    provideAnimationsAsync(),
  ]
};
