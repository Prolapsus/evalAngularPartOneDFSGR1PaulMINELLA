import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.scss',
})
export class RecapitulatifComponent implements OnInit {
  totalTaches: number = 0;
  tachesAccomplies: number = 0;

  ngOnInit() {
    const tachesSauvegardees = localStorage.getItem('taches');
    if (tachesSauvegardees) {
      const taches = JSON.parse(tachesSauvegardees);
      this.totalTaches = taches.length;
      this.tachesAccomplies = taches.filter((t: { accompli: boolean }) => t.accompli).length;
    }
  }
}
