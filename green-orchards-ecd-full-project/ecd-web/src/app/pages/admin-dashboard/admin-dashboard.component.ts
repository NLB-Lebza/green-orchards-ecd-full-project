import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AdminUser, EnrollmentRecord, UpdateUserRequest } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  accounts: AdminUser[] = [];
  children: EnrollmentRecord[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';
  editingUserId: number | null = null;
  editForm: UpdateUserRequest = { fullName: '', email: '', role: 'Admin', password: '' };

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.loading = true;
    this.successMessage = '';

    this.auth.getUsers().subscribe({
      next: users => {
        this.accounts = users;
      },
      error: () => this.errorMessage = 'Unable to load accounts.'
    });

    this.auth.getEnrollmentInquiries().subscribe({
      next: records => {
        this.children = records;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load child registrations.';
        this.loading = false;
      }
    });
  }

  totalAccounts(): number {
    return this.accounts.length;
  }

  totalChildren(): number {
    return this.children.length;
  }

  startEditAccount(account: AdminUser) {
    this.editingUserId = account.id;
    this.editForm = {
      fullName: account.fullName,
      email: account.email,
      role: account.role,
      password: ''
    };
  }

  cancelEdit() {
    this.editingUserId = null;
    this.editForm = { fullName: '', email: '', role: 'Admin', password: '' };
  }

  saveUser() {
    if (!this.editingUserId) return;

    this.auth.updateUser(this.editingUserId, this.editForm).subscribe({
      next: () => {
        this.successMessage = 'Account updated successfully.';
        this.cancelEdit();
        this.loadDashboard();
      },
      error: () => this.errorMessage = 'Unable to update this account.'
    });
  }

  deleteUser(userId: number) {
    const confirmed = window.confirm('Delete this account?');
    if (!confirmed) return;

    this.auth.deleteUser(userId).subscribe({
      next: () => {
        this.successMessage = 'Account deleted successfully.';
        this.loadDashboard();
      },
      error: () => this.errorMessage = 'Unable to delete this account.'
    });
  }

  openChildDetails(childId: number) {
    this.router.navigate(['/admin/children', childId]);
  }

  logout() {
    this.auth.clearSession();
    this.router.navigate(['/admin-login']);
  }
}
