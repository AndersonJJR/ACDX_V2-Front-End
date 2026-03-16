// src/app/features/investments/investments.routes.ts
import { Routes } from '@angular/router';

export const INVESTMENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      Promise.resolve(class PlaceholderInvestmentsComponent {}),
  },
];
