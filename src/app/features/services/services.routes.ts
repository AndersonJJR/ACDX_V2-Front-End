// src/app/features/services/services.routes.ts
import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      Promise.resolve(class PlaceholderServicesComponent {}),
  },
];
