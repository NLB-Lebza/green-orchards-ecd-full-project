import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

export interface AuthResponse {
  id: number;
  fullName: string;
  email: string;
  role: string;
}

export interface AdminUser {
  id: number;
  fullName: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface UpdateUserRequest {
  fullName: string;
  email: string;
  role: string;
  password?: string;
}

export interface EnrollmentRecord {
  id: number;
  parentName: string;
  childName: string;
  childAge: number;
  email: string;
  phone: string;
  message?: string | null;
  submittedAt: string;
}

const ADMIN_SESSION_KEY = 'green_orchards_admin_session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);

  private readSession(): AuthResponse | null {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    return raw ? JSON.parse(raw) as AuthResponse : null;
  }

  isAdminLoggedIn(): boolean {
    const session = this.readSession();
    return !!session && session.role.toLowerCase() === 'admin';
  }

  getCurrentAdmin(): AuthResponse | null {
    return this.readSession();
  }

  setSession(user: AuthResponse) {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(user));
  }

  clearSession() {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('Auth/login', { email, password });
  }

  register(fullName: string, email: string, password: string): Observable<AuthResponse> {
    return this.api.post<AuthResponse>('Auth/register', { fullName, email, password });
  }

  getUsers(): Observable<AdminUser[]> {
    return this.api.get<AdminUser[]>('Auth/users');
  }

  updateUser(userId: number, payload: UpdateUserRequest): Observable<AuthResponse> {
    return this.api.put<AuthResponse>(`Auth/users/${userId}`, payload);
  }

  deleteUser(userId: number): Observable<{ message: string }> {
    return this.api.delete<{ message: string }>(`Auth/users/${userId}`);
  }

  getEnrollmentInquiries(): Observable<EnrollmentRecord[]> {
    return this.api.get<EnrollmentRecord[]>('Enrollment');
  }
}