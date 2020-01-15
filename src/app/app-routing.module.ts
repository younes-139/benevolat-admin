import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AjouterAssociationComponent } from './admin/ajouter-association/ajouter-association.component';
import { ListAssociationComponent } from './admin/list-association/list-association.component';
import { AjouterRecompenseComponent } from './admin/ajouter-recompense/ajouter-recompense.component';
import { ListRecompenseComponent } from './admin/list-recompense/list-recompense.component';
import { ListActiviteComponent} from './admin/list-activite/list-activite.component';
import { ValiderActiviteComponent} from './admin/valider-activite/valider-activite.component';


const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  //{ path: 'admin',      component: AdminComponent },
  { path: 'admin/dashboard',      component: DashboardComponent },
  { path: 'admin/ajouter-association',      component: AjouterAssociationComponent },
  { path: 'admin/liste-des-associations',      component: ListAssociationComponent },
  { path: 'admin/ajouter-recompense',      component: AjouterRecompenseComponent },
  { path: 'admin/liste-des-recompenses',      component: ListRecompenseComponent },
  { path: 'admin/liste-des-activites',      component: ListActiviteComponent },
  { path: 'admin/valider-activite',      component: ValiderActiviteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
