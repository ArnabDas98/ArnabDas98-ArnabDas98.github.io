import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Infosys',
      role: 'Associate Senior Consultant',
      period: 'June 2024 - January 2026',
      location: 'Kolkata, West Bengal',
      points: [
        'Spearheaded the UI redesign of a flagship banking application using Angular 17, collaborating cross-functionally with product owners and UX designers.',
        'Architected a scalable front-end framework directly from Figma mockups, delivering pixel-perfect UI components with 100% code coverage.',
        'Streamlined development lifecycle by leveraging GitHub Copilot and modern Angular features, accelerating time-to-market by 70%.',
        'Led design review meetings and refactored existing code bases to build a reusable component library, cutting maintenance overhead by 30%.'
      ]
    },
    {
      company: 'Certinal Software Private Limited (Subsidiary of Zycus)',
      role: 'Senior Software Engineer',
      period: 'August 2021 - May 2024',
      location: 'Bangalore, Karnataka',
      points: [
        'Translated complex Figma wireframes into high-performance, interactive web applications.',
        'Managed end-to-end feature development and deployment across DEV, QC, and UAT environments.',
        'Enhanced application speed and maintainability by profiling and optimizing front-end performance using Chrome DevTools.',
        'Responded to customer inquiries and reduced post-launch critical bugs by 50%.',
        'Mentored junior engineers on coding best practices and debugging techniques.'
      ]
    },
    {
      company: 'Zycus Infotech',
      role: 'Software Engineer',
      period: 'Feb 2021 - July 2021',
      location: 'Bangalore, Karnataka',
      points: [
        'Developed and maintained core front-end functionalities for Certinal, an enterprise e-signing product, operating within a fast-paced Agile framework.',
        'Identified and resolved critical system bugs, continuously refining code structure.',
        'Awarded the \'Zycus Value Agility\' individual accolade for rapidly improving system architecture.'
      ]
    }
  ];
}
