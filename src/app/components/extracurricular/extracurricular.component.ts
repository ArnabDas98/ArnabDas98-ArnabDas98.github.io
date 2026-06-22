import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extracurricular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extracurricular.component.html',
  styleUrl: './extracurricular.component.css'
})
export class ExtracurricularComponent {
  activities = [
    {
      title: 'Music & Performance',
      description: 'Active musician and synthesizer player; served as a judge for local college band competitions, performed with multiple bands at Kolkata.',
      icon: '🎹'
    },
    {
      title: 'Video Editing',
      description: 'Proficient in video editing utilizing Adobe Premiere Pro.',
      icon: '🎬'
    },
    {
      title: 'Trekking & Mountaineering',
      description: 'Experienced trekker, successfully completing high-altitude hikes to Kedarkantha, Chandrashila, and Sandakphu.',
      icon: '⛰️'
    }
  ];
}
