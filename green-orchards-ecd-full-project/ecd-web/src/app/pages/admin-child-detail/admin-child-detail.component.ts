import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, EnrollmentRecord } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-child-detail.component.html',
  styleUrl: './admin-child-detail.component.scss'
})
export class AdminChildDetailComponent implements OnInit {
  private auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  child: EnrollmentRecord | null = null;
  errorMessage = '';

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.auth.getEnrollmentInquiries().subscribe({
      next: records => {
        this.child = records.find(r => r.id === id) ?? null;
        if (!this.child) {
          this.errorMessage = 'Enrollment record was not found.';
        }
      },
      error: () => {
        this.errorMessage = 'Unable to load child registration details.';
      }
    });
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
