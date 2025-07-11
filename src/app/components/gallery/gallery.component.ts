import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-gallery",
  standalone: true,
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
  imports: [CommonModule],
})
export class GalleryComponent {
  activeTab = "clips";
  selectedPhoto: any = null;
  currentPhotoIndex = 0;

  clips = [
    {
      title: "STREET GENESIS",
      views: "1.2M",
      thumbnail:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    },
    {
      title: "DRILL ANTHEM",
      views: "850K",
      thumbnail:
        "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
    },
    {
      title: "URBAN LEGENDS",
      views: "2.1M",
      thumbnail:
        "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg",
    },
    {
      title: "FIRE DRILL",
      views: "650K",
      thumbnail:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
    },
  ];

  photos = [
    {
      url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      caption: "Studio Session",
      description:
        "Enregistrement du dernier album dans le studio légendaire de Los Angeles.",
    },
    {
      url: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg",
      caption: "Concert Paris",
      description: "Show explosif au Bataclan devant 1500 personnes en délire.",
    },
    {
      url: "https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg",
      caption: "Street Art",
      description:
        "Collaboration avec des artistes graffeurs locaux pour la pochette d'album.",
    },
    {
      url: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      caption: "Backstage",
      description:
        "Moments d'intimité avant le show, concentration et préparation.",
    },
  ];

  behindScenes = [
    {
      title: "Écriture nocturne",
      description:
        "Sessions d'écriture jusqu'à 4h du matin pour trouver le flow parfait.",
      date: "15 Jan 2024",
    },
    {
      title: "Collaboration surprise",
      description:
        "Enregistrement secret avec un artiste international, révélation bientôt...",
      date: "20 Jan 2024",
    },
    {
      title: "Tournage clip",
      description:
        "Trois jours de tournage intensif dans les rues de Marseille.",
      date: "25 Jan 2024",
    },
    {
      title: "Mix final",
      description:
        "Derniers réglages avec le meilleur ingénieur son de France.",
      date: "30 Jan 2024",
    },
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  playClip(clip: any) {
    console.log("Playing clip:", clip.title);
    // Logique de lecture vidéo
  }

  openPhoto(photo: any, index: number) {
    this.selectedPhoto = photo;
    this.currentPhotoIndex = index;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

  previousPhoto() {
    this.currentPhotoIndex =
      (this.currentPhotoIndex - 1 + this.photos.length) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentPhotoIndex];
  }

  nextPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
    this.selectedPhoto = this.photos[this.currentPhotoIndex];
  }
}
