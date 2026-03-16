// src/app/features/home/home.routes.ts
import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.page').then((m) => m.HomePage),
  },
];
