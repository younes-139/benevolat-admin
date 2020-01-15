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
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/authGaurd/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  //{ path: 'admin',      component: AdminComponent },
  { path: 'admin/dashboard',      component: DashboardComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/ajouter-association',      component: AjouterAssociationComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/liste-des-associations',      component: ListAssociationComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/ajouter-recompense',      component: AjouterRecompenseComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/liste-des-recompenses',      component: ListRecompenseComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/liste-des-activites',      component: ListActiviteComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/valider-activite',      component: ValiderActiviteComponent ,canActivate:[AuthGuardService]},
  { path: 'admin/login',      component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
