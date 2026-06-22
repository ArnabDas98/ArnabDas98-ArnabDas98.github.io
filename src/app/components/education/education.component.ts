import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations = [
    {
      institution: 'SP Jain Institute of Management and Research',
      degree: 'Post Graduate Diploma in Management',
      period: 'December 2025 - Expected Graduation: July, 2027',
      location: 'Mumbai, Maharashtra',
      grade: null
    },
    {
      institution: 'Narula Institute of Technology (MAKAUT)',
      degree: 'Bachelor of Technology in Electronics and Communications',
      period: 'June 2016 – July 2020',
      location: 'Kolkata, West Bengal',
      grade: 'DGPA- 8.3'
    }
  ];
}
