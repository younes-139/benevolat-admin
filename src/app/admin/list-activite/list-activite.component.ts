import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../../shared/activite/activite.service'

@Component({
  selector: 'app-list-activite',
  templateUrl: './list-activite.component.html',
  styleUrls: ['./list-activite.component.css']
})
export class ListActiviteComponent implements OnInit {
  listActivites : Array<any>;
  constructor(private _activiteService: ActiviteService) { }

  ngOnInit() {
    this._activiteService.getAllActivites().subscribe(
      res => {
        this.listActivites = res._embedded.activites;
        console.log(this.listActivites);
      },
      error =>{
        console.log(error);
      }
      );
  }

}
