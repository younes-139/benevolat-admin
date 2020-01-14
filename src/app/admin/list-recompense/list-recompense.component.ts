import { Component, OnInit } from '@angular/core';
import { RecompenseService } from '../../shared/recompense/recompense.service';

@Component({
  selector: 'app-list-recompense',
  templateUrl: './list-recompense.component.html',
  styleUrls: ['./list-recompense.component.css']
})
export class ListRecompenseComponent implements OnInit {
  
  listRecompense : Array<any>;
  constructor(private _recompenseService: RecompenseService) { }

  ngOnInit() {
    this._recompenseService.getAllRecompense().subscribe(
      res => {
        this.listRecompense = res._embedded.recompences;
        console.log(this.listRecompense);
      },
      error =>{
        console.log(error);
      }
      );
  }

}
