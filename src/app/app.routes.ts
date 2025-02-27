import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then((m) => m.StartPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'otp-verify',
    loadComponent: () => import('./auth/otp-verify/otp-verify.page').then( m => m.OtpVerifyPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./private/home/home.page').then( m => m.HomePage)
  },
];
