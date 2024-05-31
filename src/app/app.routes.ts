import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './shared/guards/auth.guard';


export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  }
];
