import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Page404Component } from './page404/page404.component';
import { ListeTachesComponent} from "./liste-taches/liste-taches.component";
import { RecapitulatifComponent } from "./recapitulatif/recapitulatif.component";


export const routes: Routes = [
    {path: "accueil", component: AccueilComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "listeTaches", component: ListeTachesComponent},
    {path: "Recapitulatif", component: RecapitulatifComponent },
    {path: "", redirectTo: "accueil", pathMatch: 'full' },
    {path: "**", component: Page404Component}
];
