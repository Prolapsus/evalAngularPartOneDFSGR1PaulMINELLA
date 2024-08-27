import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgClass} from "@angular/common";

interface Tache {
  id: number;
  nom: string;
  accompli: boolean;
  enEdition?: boolean;
}

@Component({
  selector: 'app-liste-taches',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './liste-taches.component.html',
  styleUrl: './liste-taches.component.scss',
})
export class ListeTachesComponent implements OnInit {
  nouvelleTache: string = '';
  taches: Tache[] = [];

  ngOnInit() {
    this.chargerTaches();
  }

  chargerTaches() {
    const tachesSauvegardees = localStorage.getItem('taches');
    if (tachesSauvegardees) {
      this.taches = JSON.parse(tachesSauvegardees);
    }
  }

  ajouterTache() {
    if (this.nouvelleTache.trim() !== '') {
      const tache: Tache = {
        id: Date.now(),
        nom: this.nouvelleTache,
        accompli: false,
        enEdition: false,
      };
      this.taches.push(tache);
      this.nouvelleTache = '';
      this.sauvegarderTaches();
    }
  }

  supprimerTache(id: number) {
    this.taches = this.taches.filter(tache => tache.id !== id);
    this.sauvegarderTaches();
  }

  basculerAccomplissementTache(id: number) {
    const tache = this.taches.find(t => t.id === id);
    if (tache) {
      tache.accompli = !tache.accompli;
      this.sauvegarderTaches();
    }
  }

  sauvegarderTaches() {
    localStorage.setItem('taches', JSON.stringify(this.taches));
  }

  activerEdition(tache: Tache) {
    tache.enEdition = true;
  }

  sauvegarderEdition(tache: Tache) {
    tache.enEdition = false;
    this.sauvegarderTaches();
  }

  annulerEdition(tache: Tache) {
    tache.enEdition = false;
    this.chargerTaches();
  }

  reset() {
    this.taches = [];
    this.sauvegarderTaches();
  }
}
