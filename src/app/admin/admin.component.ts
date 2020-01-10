import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addAssociation = false;
  listAssociation = false;
  addRecompense = false;
  listRecompense = false;
  validerActivite = false;
  listActivite = false;
  dashboard = true;

  constructor() { }

  ngOnInit() {
  }
  changeComponent(component: string){
    if(component=='addAssociation'){
      this.addAssociation = true;
      this.listAssociation = false;
      this.addRecompense = false;
      this.listRecompense = false;
      this.validerActivite = false;
      this.listActivite = false;
      this.dashboard = false;
    }else if(component=='listAssociation'){
      this.addAssociation = false;
      this.listAssociation = true;
      this.addRecompense = false;
      this.listRecompense = false;
      this.validerActivite = false;
      this.listActivite = false;
      this.dashboard = false;
    }else if(component=='addRecompense'){
      this.addAssociation = false;
      this.listAssociation = false;
      this.addRecompense = true;
      this.listRecompense = false;
      this.validerActivite = false;
      this.listActivite = false;
      this.dashboard = false;
    }else if(component=='listRecompense'){
      this.addAssociation = false;
      this.listAssociation = false;
      this.addRecompense = false;
      this.listRecompense = true;
      this.validerActivite = false;
      this.listActivite = false;
      this.dashboard = false;
    }else if(component=='validerActivite'){
      this.addAssociation = false;
      this.listAssociation = false;
      this.addRecompense = false;
      this.listRecompense = false;
      this.validerActivite = true;
      this.listActivite = false;
      this.dashboard = false;
    }else if(component=='listActivite'){
      this.addAssociation = false;
      this.listAssociation = false;
      this.addRecompense = false;
      this.listRecompense = false;
      this.validerActivite = false;
      this.listActivite = true;
      this.dashboard = false;
    }else if(component=='dashboard'){
      this.addAssociation = false;
      this.listAssociation = false;
      this.addRecompense = false;
      this.listRecompense = false;
      this.validerActivite = false;
      this.listActivite = false;
      this.dashboard = true;
    }
  }

}
