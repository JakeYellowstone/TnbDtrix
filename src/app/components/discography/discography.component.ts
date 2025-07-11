import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discography',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./discography.component.css'],
  templateUrl: './discography.component.html',
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