import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.scss'
})
export class EnrollComponent {
  private api = inject(ApiService);
  form = { parentName: '', childName: '', childAge: 0, email: '', phone: '', message: '' };
  message = '';

  submit() {
    if (!this.form.parentName.trim() || !this.form.childName.trim() || !this.form.email.includes('@') || !this.form.phone.trim()) {
      this.message = 'Please complete the required fields.';
      return;
    }

    this.api.post('Enrollment', this.form).subscribe({
      next: () => this.message = 'Thank you. Your enrollment inquiry was received.',
      error: () => this.message = 'The inquiry could not be submitted. Please try again.'
    });
  }
}