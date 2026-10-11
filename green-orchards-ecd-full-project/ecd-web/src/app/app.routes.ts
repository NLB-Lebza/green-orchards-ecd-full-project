import { Routes } from '@angular/router';
import { adminAuthGuard } from './guards/admin-auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'programs', loadComponent: () => import('./pages/programs/programs.component').then(m => m.ProgramsComponent) },
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'enroll', loadComponent: () => import('./pages/enroll/enroll.component').then(m => m.EnrollComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'admin-login', loadComponent: () => import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent) },
  { path: 'admin', loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent), canActivate: [adminAuthGuard] },
  { path: 'admin/children/:id', loadComponent: () => import('./pages/admin-child-detail/admin-child-detail.component').then(m => m.AdminChildDetailComponent), canActivate: [adminAuthGuard] },
  { path: 'create-account', loadComponent: () => import('./pages/create-account/create-account.component').then(m => m.CreateAccountComponent) },
  { path: '**', redirectTo: '' }
];