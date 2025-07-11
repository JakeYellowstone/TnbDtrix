import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { DiscographyComponent } from './components/discography/discography.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    //RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    DiscographyComponent,
    EventsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-discography></app-discography>
        <app-events></app-events>
        <app-gallery></app-gallery>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      position: relative;
      overflow-x: hidden;
    }
    
    main {
      position: relative;
      z-index: 1;
    }
  `]
})
export class AppComponent {
  title = 'TnbyDtrix';
}