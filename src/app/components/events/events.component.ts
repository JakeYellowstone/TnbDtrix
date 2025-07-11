import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-events",
  standalone: true,
  styleUrls: ["./events.component.css"],
  templateUrl: "./events.component.html",
  imports: [CommonModule],
})
export class EventsComponent {
  activeEvents: boolean[] = [];

  events = [
    {
      title: "DRILL NIGHT FEVER",
      location: "Paris - Bataclan",
      date: { day: "15", month: "FEV", year: "2024" },
      time: "20:00",
      price: "25€",
      description:
        "Concert exceptionnel avec guests surprise. Une soirée drill inoubliable dans la capitale.",
    },
    {
      title: "STREET VIBES TOUR",
      location: "Lyon - Transbordeur",
      date: { day: "22", month: "FEV", year: "2024" },
      time: "19:30",
      price: "30€",
      description:
        "Tournée nationale avec showcase des derniers hits. Ambiance street garantie!",
    },
    {
      title: "URBAN FESTIVAL",
      location: "Marseille - Friche Belle de Mai",
      date: { day: "05", month: "MAR", year: "2024" },
      time: "18:00",
      price: "35€",
      description:
        "Festival urbain avec artistes drill et hip-hop. Une célébration de la culture street.",
    },
    {
      title: "FREESTYLE BATTLE",
      location: "Lille - Aeronef",
      date: { day: "12", month: "MAR", year: "2024" },
      time: "21:00",
      price: "20€",
      description:
        "Battle de freestyle avec les meilleurs MCs de la région. Participation ouverte!",
    },
  ];

  newsItems = [
    {
      date: "10 FEV 2024",
      category: "ALBUM",
      headline: 'Nouveau single "FIRE DRILL" disponible',
      content:
        "Le dernier single de TnbyDtrix cartonne déjà sur les plateformes. Un son lourd qui promet pour la suite!",
      tags: ["drill", "single", "fire"],
    },
    {
      date: "05 FEV 2024",
      category: "COLLAB",
      headline: "Collaboration avec Freeze Corleone en préparation",
      content:
        "Des sources confirment une collaboration explosive entre TnbyDtrix et Freeze Corleone. Le rap game va trembler!",
      tags: ["collab", "freeze", "drill"],
    },
    {
      date: "01 FEV 2024",
      category: "CLIP",
      headline: 'Clip "STREET GENESIS" : 1M de vues en 48h',
      content:
        "Le clip officiel de Street Genesis explose les compteurs. Un visuel exceptionnel qui marque les esprits.",
      tags: ["clip", "success", "viral"],
    },
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
    console.log("Booking event:", event.title);
    // Logique de réservation ici
  }
}
