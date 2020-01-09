import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AjouterAssociationComponent } from './admin/ajouter-association/ajouter-association.component';
import { ListAssociationComponent } from './admin/list-association/list-association.component';
import { ListRecompenseComponent } from './admin/list-recompense/list-recompense.component';
import { AjouterRecompenseComponent } from './admin/ajouter-recompense/ajouter-recompense.component';
import { ValiderActiviteComponent } from './admin/valider-activite/valider-activite.component';
import { ListActiviteComponent } from './admin/list-activite/list-activite.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    DashboardComponent,
    AjouterAssociationComponent,
    ListAssociationComponent,
    ListRecompenseComponent,
    AjouterRecompenseComponent,
    ValiderActiviteComponent,
    ListActiviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
