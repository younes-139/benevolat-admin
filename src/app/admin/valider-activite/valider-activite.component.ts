import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../../shared/activite/activite.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-valider-activite',
  templateUrl: './valider-activite.component.html',
  styleUrls: ['./valider-activite.component.css']
})
export class ValiderActiviteComponent implements OnInit {
  listActivitesInProgress : Array<any>;
  score : number = 0;

  constructor(private _activiteService: ActiviteService) { }

  ngOnInit() {
    this._activiteService.getAllInProgressActivites().subscribe(
      res => {
        this.listActivitesInProgress = res;
        console.log(this.listActivitesInProgress);
      },
      error =>{
        console.log(error);
      }
      );
  }

  validerActivite(id){
    let data;
    this._activiteService.validerActivite(id,data,this.score).subscribe(
      res => {
        console.log(res);
      },
      error =>{
        console.log(error);
      }
      );
  }
  refuserActivite(id){
    let data;
    this._activiteService.refuserActivite(id,data).subscribe(
      res => {
        console.log(res);
      },
      error =>{
        console.log(error);
      }
      );
  }

}
