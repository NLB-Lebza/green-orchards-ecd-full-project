import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  showPassword = false;
  errorMessage = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.errorMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Email is required.';
      return;
    }

    if (!this.email.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (!this.password.trim()) {
      this.errorMessage = 'Password is required.';
      return;
    }

    this.auth.login(this.email, this.password).subscribe({
      next: user => {
        if (user.role?.toLowerCase() !== 'admin') {
          this.errorMessage = 'This account does not have admin access.';
          return;
        }

        this.auth.setSession(user);
        this.router.navigate(['/admin']);
      },
      error: e => this.errorMessage = e?.error?.message ?? 'Admin login failed.'
    });
  }
}
