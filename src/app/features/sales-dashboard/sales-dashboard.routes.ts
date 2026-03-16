// src/app/features/sales-dashboard/sales-dashboard.routes.ts
import { Routes } from '@angular/router';

export const SALES_DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      Promise.resolve(class PlaceholderSalesDashboardComponent {}),
  },
];
