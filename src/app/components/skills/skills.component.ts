import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'HTML/CSS', 'Git', 'Bootstrap', 'NodeJS', 'C']
    },
    {
      title: 'Developer Tools',
      skills: ['VS Code', 'Eclipse']
    },
    {
      title: 'Technologies / Frameworks',
      skills: ['Angular 2+', 'Bootstrap']
    }
  ];
}
