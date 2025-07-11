import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  activeInputs = {
    name: false,
    email: false,
    subject: false,
    message: false
  };

  isSubmitting = false;

  wallTags = [
    { text: 'DRILL', x: 100, y: 150, rotation: -15, color: '#C90000' },
    { text: 'STREET', x: 300, y: 200, rotation: 20, color: '#F7E733' },
    { text: 'VIBES', x: 500, y: 100, rotation: -10, color: '#F5F5F5' },
    { text: 'URBAN', x: 700, y: 300, rotation: 25, color: '#C90000' },
    { text: 'FIRE', x: 200, y: 400, rotation: -20, color: '#F7E733' },
    { text: 'TRAP', x: 600, y: 450, rotation: 15, color: '#F5F5F5' }
  ];

  ngOnInit() {
    this.generateWallTags();
  }

  generateWallTags() {
    // Génération dynamique des tags sur le mur
    setInterval(() => {
      this.wallTags.forEach(tag => {
        tag.x = Math.random() * window.innerWidth;
        tag.y = Math.random() * window.innerHeight;
        tag.rotation = Math.random() * 40 - 20;
      });
    }, 8000);
  }

  onInputFocus(field: string) {
    this.activeInputs[field as keyof typeof this.activeInputs] = true;
  }

  onInputBlur(field: string) {
    this.activeInputs[field as keyof typeof this.activeInputs] = false;
  }

  submitForm() {
    this.isSubmitting = true;
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      alert('Message envoyé avec succès! TnbyDtrix vous répondra bientôt.');
    }, 2000);
  }
}