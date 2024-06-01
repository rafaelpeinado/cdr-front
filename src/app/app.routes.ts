import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { loginGuard } from './shared/guards/login.guard';


export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    canActivate: [loginGuard]
  },
  {
    path: 'test',
    loadComponent: () => import('./test/test.component').then(m => m.TestComponent),
    canActivate: [authGuard]
  }
];
