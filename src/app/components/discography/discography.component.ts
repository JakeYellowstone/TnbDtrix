import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="music" class="discography-section">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="section-title">DISCOGRAPHIE</h2>
          <div class="title-underline"></div>
        </div>
        
        <div class="albums-grid">
          <div class="album-card" *ngFor="let album of albums; let i = index" 
               [class.flipped]="flippedCards[i]" 
               (click)="flipCard(i)">
            <div class="card-inner">
              <div class="card-front">
                <div class="album-cover">
                  <div class="cover-overlay"></div>
                  <div class="album-title">{{ album.title }}</div>
                  <div class="album-year">{{ album.year }}</div>
                </div>
                <div class="card-explosion"></div>
              </div>
              
              <div class="card-back">
                <div class="tracklist">
                  <h3 class="tracklist-title">TRACKLIST</h3>
                  <ul class="tracks">
                    <li *ngFor="let track of album.tracks" class="track-item">
                      <span class="track-number">{{ track.number }}</span>
                      <span class="track-name">{{ track.name }}</span>
                      <button class="play-btn" (click)="playTrack(track, $event)">▶</button>
                    </li>
                  </ul>
                </div>
                <div class="streaming-links">
                  <a href="#" class="stream-link spotify">🎵 SPOTIFY</a>
                  <a href="#" class="stream-link deezer">🎶 DEEZER</a>
                  <a href="#" class="stream-link youtube">📺 YOUTUBE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="player-section" *ngIf="currentTrack">
          <div class="player-container">
            <div class="player-info">
              <div class="track-title">{{ currentTrack.name }}</div>
              <div class="track-artist">TnbyDtrix</div>
            </div>
            <div class="player-controls">
              <button class="control-btn" (click)="previousTrack()">⏮</button>
              <button class="control-btn play-pause" (click)="togglePlay()">
                {{ isPlaying ? '⏸' : '▶' }}
              </button>
              <button class="control-btn" (click)="nextTrack()">⏭</button>
            </div>
            <div class="player-visual">
              <div class="visualizer-bar" *ngFor="let bar of visualizerBars" [style.height.px]="bar.height"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .discography-section {
      min-height: 100vh;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 50%, #000 100%);
      padding: 6rem 0;
      position: relative;
      overflow: hidden;
    }
    
    .discography-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 30%, rgba(247, 231, 51, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(201, 0, 0, 0.1) 0%, transparent 50%);
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
    
    .albums-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .album-card {
      perspective: 1000px;
      height: 400px;
      cursor: pointer;
    }
    
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s ease;
    }
    
    .album-card.flipped .card-inner {
      transform: rotateY(180deg);
    }
    
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: 3px solid #C90000;
      background: linear-gradient(135deg, #1C1C1C 0%, #000 100%);
      overflow: hidden;
    }
    
    .card-back {
      transform: rotateY(180deg);
      padding: 2rem;
    }
    
    .album-cover {
      position: relative;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    .cover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        linear-gradient(45deg, transparent 30%, rgba(247, 231, 51, 0.2) 50%, transparent 70%),
        radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.3) 0%, transparent 70%);
      animation: coverPulse 4s ease-in-out infinite;
    }
    
    .album-title {
      font-size: 2rem;
      font-weight: bold;
      color: #F5F5F5;
      text-shadow: 2px 2px 4px #000;
      margin-bottom: 1rem;
      z-index: 2;
      position: relative;
    }
    
    .album-year {
      font-size: 1.2rem;
      color: #F7E733;
      font-weight: bold;
      z-index: 2;
      position: relative;
    }
    
    .card-explosion {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .album-card:hover .card-explosion {
      animation: cardExplosion 0.6s ease-out;
    }
    
    .tracklist {
      margin-bottom: 2rem;
    }
    
    .tracklist-title {
      font-size: 1.5rem;
      color: #F7E733;
      margin-bottom: 1rem;
      font-weight: bold;
      text-align: center;
    }
    
    .tracks {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .track-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(245, 245, 245, 0.1);
      transition: all 0.3s ease;
    }
    
    .track-item:hover {
      background: rgba(201, 0, 0, 0.1);
      transform: translateX(5px);
    }
    
    .track-number {
      color: #C90000;
      font-weight: bold;
      width: 30px;
    }
    
    .track-name {
      color: #F5F5F5;
      flex: 1;
      margin-left: 1rem;
    }
    
    .play-btn {
      background: #C90000;
      color: #F5F5F5;
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .play-btn:hover {
      background: #F7E733;
      color: #000;
      transform: scale(1.1);
    }
    
    .streaming-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .stream-link {
      display: block;
      text-align: center;
      padding: 0.5rem;
      background: linear-gradient(135deg, #C90000 0%, #A00000 100%);
      color: #F5F5F5;
      text-decoration: none;
      font-weight: bold;
      border: 2px solid #C90000;
      transition: all 0.3s ease;
    }
    
    .stream-link:hover {
      background: linear-gradient(135deg, #F7E733 0%, #E6D000 100%);
      color: #000;
      border-color: #F7E733;
      transform: translateY(-2px);
    }
    
    .stream-link.spotify:hover {
      background: linear-gradient(135deg, #1ED760 0%, #1DB954 100%);
      color: #000;
    }
    
    .stream-link.deezer:hover {
      background: linear-gradient(135deg, #FF6600 0%, #E55A00 100%);
      color: #F5F5F5;
    }
    
    .stream-link.youtube:hover {
      background: linear-gradient(135deg, #FF0000 0%, #CC0000 100%);
      color: #F5F5F5;
    }
    
    .player-section {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(135deg, #000 0%, #1C1C1C 100%);
      border-top: 3px solid #C90000;
      padding: 1rem;
      z-index: 100;
    }
    
    .player-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .player-info {
      flex: 1;
    }
    
    .track-title {
      color: #F5F5F5;
      font-weight: bold;
      font-size: 1.1rem;
    }
    
    .track-artist {
      color: #F7E733;
      font-size: 0.9rem;
    }
    
    .player-controls {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    
    .control-btn {
      background: #C90000;
      color: #F5F5F5;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    
    .control-btn:hover {
      background: #F7E733;
      color: #000;
      transform: scale(1.1);
    }
    
    .play-pause {
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
    }
    
    .player-visual {
      display: flex;
      align-items: end;
      gap: 2px;
      height: 40px;
    }
    
    .visualizer-bar {
      width: 3px;
      background: linear-gradient(to top, #C90000, #F7E733);
      animation: visualizerPulse 1s ease-in-out infinite;
    }
    
    @keyframes coverPulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 1; }
    }
    
    @keyframes cardExplosion {
      0% { width: 0; height: 0; background: rgba(247, 231, 51, 0.8); }
      100% { width: 200px; height: 200px; background: rgba(247, 231, 51, 0); }
    }
    
    @keyframes visualizerPulse {
      0%, 100% { transform: scaleY(0.3); }
      50% { transform: scaleY(1); }
    }
    
    @media (max-width: 768px) {
      .albums-grid {
        grid-template-columns: 1fr;
      }
      
      .player-container {
        flex-direction: column;
        gap: 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class DiscographyComponent {
  flippedCards: boolean[] = [];
  currentTrack: any = null;
  isPlaying = false;
  visualizerBars: { height: number }[] = [];

  albums = [
    {
      title: 'STREET GENESIS',
      year: '2023',
      tracks: [
        { number: '01', name: 'INTRO DRILL' },
        { number: '02', name: 'CONCRETE JUNGLE' },
        { number: '03', name: 'STREET VIBES' },
        { number: '04', name: 'RAGE MODE' },
        { number: '05', name: 'OUTRO FIRE' }
      ]
    },
    {
      title: 'URBAN LEGENDS',
      year: '2024',
      tracks: [
        { number: '01', name: 'LEGENDS NEVER DIE' },
        { number: '02', name: 'GHETTO CROWN' },
        { number: '03', name: 'DRILL ANTHEM' },
        { number: '04', name: 'STREET SYMPHONY' },
        { number: '05', name: 'FINAL BOSS' }
      ]
    },
    {
      title: 'FUTURE DRILL',
      year: '2024',
      tracks: [
        { number: '01', name: 'EVOLUTION' },
        { number: '02', name: 'DIGITAL STREETS' },
        { number: '03', name: 'CYBER DRILL' },
        { number: '04', name: 'NEON NIGHTS' },
        { number: '05', name: 'TOMORROW' }
      ]
    }
  ];

  ngOnInit() {
    this.flippedCards = new Array(this.albums.length).fill(false);
    this.generateVisualizerBars();
  }

  flipCard(index: number) {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  playTrack(track: any, event: Event) {
    event.stopPropagation();
    this.currentTrack = track;
    this.isPlaying = true;
    console.log('Playing track:', track.name);
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  previousTrack() {
    console.log('Previous track');
  }

  nextTrack() {
    console.log('Next track');
  }

  generateVisualizerBars() {
    for (let i = 0; i < 20; i++) {
      this.visualizerBars.push({
        height: Math.random() * 30 + 10
      });
    }
    
    setInterval(() => {
      if (this.isPlaying) {
        this.visualizerBars.forEach(bar => {
          bar.height = Math.random() * 30 + 10;
        });
      }
    }, 200);
  }
}