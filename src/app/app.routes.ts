import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/shell/app-shell.component';
import { authGuard } from './core/api/auth.guard';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./auth/signup/signup.page').then((m) => m.SignupPage),
  },
  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
      },
      {
        path: 'sales-dashboard',
        loadChildren: () =>
          import('./features/sales-dashboard/sales-dashboard.routes').then((m) => m.SALES_DASHBOARD_ROUTES),
      },
      {
        path: 'investments',
        loadChildren: () =>
          import('./features/investments/investments.routes').then((m) => m.INVESTMENTS_ROUTES),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services.routes').then((m) => m.SERVICES_ROUTES),
      },
    ],
  },
];
