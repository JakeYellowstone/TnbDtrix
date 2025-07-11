import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="events" class="events-section">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="section-title">ÉVÉNEMENTS</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="timeline-container">
          <div class="timeline-line"></div>
          
          <div class="event-item" *ngFor="let event of events; let i = index" 
               [class.left]="i % 2 === 0" 
               [class.right]="i % 2 === 1"
               [class.active]="activeEvents[i]">
            <div class="event-content">
              <div class="event-date">
                <span class="day">{{ event.date.day }}</span>
                <span class="month">{{ event.date.month }}</span>
                <span class="year">{{ event.date.year }}</span>
              </div>
              
              <div class="event-info">
                <h3 class="event-title">{{ event.title }}</h3>
                <p class="event-location">📍 {{ event.location }}</p>
                <p class="event-description">{{ event.description }}</p>
                
                <div class="event-details">
                  <span class="event-time">🕐 {{ event.time }}</span>
                  <span class="event-price">💰 {{ event.price }}</span>
                </div>
                
                <button class="event-btn" (click)="bookEvent(event)">
                  <span class="btn-text">RÉSERVER</span>
                  <div class="btn-explosion"></div>
                </button>
              </div>
            </div>
            
            <div class="event-marker">
              <div class="marker-inner"></div>
              <div class="marker-pulse"></div>
            </div>
            
            <div class="event-splash"></div>
          </div>
        </div>
        
        <div class="news-section">
          <h3 class="news-title">ACTUALITÉS</h3>
          <div class="news-grid">
            <div class="news-card" *ngFor="let news of newsItems">
              <div class="news-header">
                <span class="news-date">{{ news.date }}</span>
                <span class="news-category">{{ news.category }}</span>
              </div>
              <h4 class="news-headline">{{ news.headline }}</h4>
              <p class="news-content">{{ news.content }}</p>
              <div class="news-tags">
                <span class="news-tag" *ngFor="let tag of news.tags">#{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .events-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 50%, #1C1C1C 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .events-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 15% 25%, rgba(201, 0, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 85% 75%, rgba(247, 231, 51, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .section-title {
      font-size: 3rem;
      font-weight: 900;
      color: #F5F5F5;
      font-family: 'Black Ops One', cursive;
      text-shadow: 3px 3px 0 #C90000, 6px 6px 0 #000;
      margin-bottom: 1rem;
    }
    
    .title-underline {
      width: 200px;
      height: 4px;
      background: linear-gradient(90deg, #C90000 0%, #F7E733 100%);
      margin: 0 auto;
      position: relative;
    }
    
    .timeline-container {
      position: relative;
      max-width: 1000px;
      margin: 0 auto 4rem;
    }
    
    .timeline-line {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
      background: linear-gradient(to bottom, #C90000, #F7E733, #C90000);
      z-index: 1;
    }
    
    .event-item {
      position: relative;
      margin: 4rem 0;
      opacity: 0.5;
      transition: all 0.6s ease;
    }
    
    .event-item.active {
      opacity: 1;
      transform: scale(1.02);
    }
    
    .event-item.left {
      padding-right: 50%;
    }
    
    .event-item.right {
      padding-left: 50%;
    }
    
    .event-content {
      position: relative;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border: 3px solid #C90000;
      padding: 2rem;
      margin: 0 2rem;
      transform: rotate(-1deg);
      transition: all 0.3s ease;
    }
    
    .event-item.right .event-content {
      transform: rotate(1deg);
      border-color: #F7E733;
    }
    
    .event-content:hover {
      transform: rotate(0deg) scale(1.05);
      box-shadow: 0 10px 30px rgba(201, 0, 0, 0.3);
    }
    
    .event-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #C90000;
      color: #F5F5F5;
      padding: 1rem;
      border-radius: 10px;
      margin-bottom: 1rem;
      width: fit-content;
    }
    
    .day {
      font-size: 2rem;
      font-weight: bold;
      line-height: 1;
    }
    
    .month {
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    .year {
      font-size: 0.9rem;
      opacity: 0.8;
    }
    
    .event-info {
      flex: 1;
    }
    
    .event-title {
      font-size: 1.5rem;
      color: #F7E733;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    
    .event-location {
      color: #F5F5F5;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    
    .event-description {
      color: #F5F5F5;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .event-details {
      display: flex;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .event-time, .event-price {
      color: #F7E733;
      font-weight: bold;
    }
    
    .event-btn {
      position: relative;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      color: #F5F5F5;
      border: none;
      padding: 1rem 2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      overflow: hidden;
    }
    
    .event-btn:hover {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      color: #000;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(201, 0, 0, 0.3);
    }
    
    .btn-explosion {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .event-btn:active .btn-explosion {
      animation: buttonExplosion 0.6s ease-out;
    }
    
    .event-marker {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background: #F7E733;
      border: 4px solid #C90000;
      border-radius: 50%;
      z-index: 3;
    }
    
    .marker-inner {
      width: 100%;
      height: 100%;
      background: #F7E733;
      border-radius: 50%;
      animation: markerPulse 2s ease-in-out infinite;
    }
    
    .marker-pulse {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 40px;
      height: 40px;
      border: 2px solid #C90000;
      border-radius: 50%;
      animation: pulseRing 2s ease-in-out infinite;
    }
    
    .event-splash {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .event-item.active .event-splash {
      animation: eventSplash 1s ease-out;
    }
    
    .news-section {
      margin-top: 6rem;
    }
    
    .news-title {
      font-size: 2.5rem;
      color: #F7E733;
      text-align: center;
      margin-bottom: 3rem;
      font-weight: bold;
      text-shadow: 2px 2px 4px #000;
    }
    
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .news-card {
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border: 2px solid #F7E733;
      padding: 2rem;
      transform: rotate(-0.5deg);
      transition: all 0.3s ease;
    }
    
    .news-card:hover {
      transform: rotate(0deg) scale(1.02);
      border-color: #C90000;
      box-shadow: 0 5px 20px rgba(247, 231, 51, 0.2);
    }
    
    .news-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .news-date {
      color: #F5F5F5;
      font-size: 0.9rem;
    }
    
    .news-category {
      background: #C90000;
      color: #F5F5F5;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    .news-headline {
      font-size: 1.3rem;
      color: #F7E733;
      margin-bottom: 1rem;
      line-height: 1.3;
    }
    
    .news-content {
      color: #F5F5F5;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .news-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .news-tag {
      background: rgba(201, 0, 0, 0.2);
      color: #C90000;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
      border: 1px solid #C90000;
    }
    
    @keyframes buttonExplosion {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 150px; height: 150px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes markerPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    
    @keyframes pulseRing {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(2); opacity: 0; }
    }
    
    @keyframes eventSplash {
      0% { width: 0; height: 0; background: rgba(201, 0, 0, 0.6); }
      100% { width: 300px; height: 300px; background: rgba(201, 0, 0, 0); }
    }
    
    @media (max-width: 768px) {
      .timeline-line {
        left: 30px;
      }
      
      .event-item.left, .event-item.right {
        padding-left: 80px;
        padding-right: 0;
      }
      
      .event-marker {
        left: 30px;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .news-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class EventsComponent {
  activeEvents: boolean[] = [];

  events = [
    {
      title: 'DRILL NIGHT FEVER',
      location: 'Paris - Bataclan',
      date: { day: '15', month: 'FEV', year: '2024' },
      time: '20:00',
      price: '25€',
      description: 'Concert exceptionnel avec guests surprise. Une soirée drill inoubliable dans la capitale.'
    },
    {
      title: 'STREET VIBES TOUR',
      location: 'Lyon - Transbordeur',
      date: { day: '22', month: 'FEV', year: '2024' },
      time: '19:30',
      price: '30€',
      description: 'Tournée nationale avec showcase des derniers hits. Ambiance street garantie!'
    },
    {
      title: 'URBAN FESTIVAL',
      location: 'Marseille - Friche Belle de Mai',
      date: { day: '05', month: 'MAR', year: '2024' },
      time: '18:00',
      price: '35€',
      description: 'Festival urbain avec artistes drill et hip-hop. Une célébration de la culture street.'
    },
    {
      title: 'FREESTYLE BATTLE',
      location: 'Lille - Aeronef',
      date: { day: '12', month: 'MAR', year: '2024' },
      time: '21:00',
      price: '20€',
      description: 'Battle de freestyle avec les meilleurs MCs de la région. Participation ouverte!'
    }
  ];

  newsItems = [
    {
      date: '10 FEV 2024',
      category: 'ALBUM',
      headline: 'Nouveau single "FIRE DRILL" disponible',
      content: 'Le dernier single de TnbyDtrix cartonne déjà sur les plateformes. Un son lourd qui promet pour la suite!',
      tags: ['drill', 'single', 'fire']
    },
    {
      date: '05 FEV 2024',
      category: 'COLLAB',
      headline: 'Collaboration avec Freeze Corleone en préparation',
      content: 'Des sources confirment une collaboration explosive entre TnbyDtrix et Freeze Corleone. Le rap game va trembler!',
      tags: ['collab', 'freeze', 'drill']
    },
    {
      date: '01 FEV 2024',
      category: 'CLIP',
      headline: 'Clip "STREET GENESIS" : 1M de vues en 48h',
      content: 'Le clip officiel de Street Genesis explose les compteurs. Un visuel exceptionnel qui marque les esprits.',
      tags: ['clip', 'success', 'viral']
    }
  ];

  ngOnInit() {
    this.activeEvents = new Array(this.events.length).fill(false);
    this.animateEvents();
  }

  animateEvents() {
    this.events.forEach((_, index) => {
      setTimeout(() => {
        this.activeEvents[index] = true;
      }, index * 300);
    });
  }

  bookEvent(event: any) {
    console.log('Booking event:', event.title);
    // Logique de réservation ici
  }
}