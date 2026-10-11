import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {EcdProgram} from '../../models/program.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  private api = inject(ApiService);
  programs: EcdProgram[] = [];

  ngOnInit() {
    this.api.get<EcdProgram[]>('Programs').subscribe({
      next: (d) => this.programs = d,
      error: () => this.programs = [
        { id: 1, name: 'Little Explorers', description: 'Early learning through play and discovery.', minimumAge: 2, maximumAge: 3, imageUrl: '', createdAt: '' },
        { id: 2, name: 'Growing Minds', description: 'Creative learning and social development.', minimumAge: 4, maximumAge: 5, imageUrl: '', createdAt: '' }
      ]
    });
  }
}