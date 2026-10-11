import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  private auth = inject(AuthService);

  fullName = '';
  email = '';
  password = '';
  showPassword = false;
  errorMessage = '';
  successMessage = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  createAccount() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.fullName.trim()) {
      this.errorMessage = 'Full name is required.';
      return;
    }

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

    if (this.password.length < 6) {
      this.errorMessage = 'Password must contain at least 6 characters.';
      return;
    }

    this.auth.register(this.fullName, this.email, this.password).subscribe({
      next: () => {
        this.successMessage = 'Account created successfully. You can now sign in.';
        this.fullName = '';
        this.email = '';
        this.password = '';
      },
      error: e => this.errorMessage = e?.error?.message ?? 'Account creation failed.'
    });
  }
}
