import { Component, OnInit } from '@angular/core';
import { RecompenseService } from '../../shared/recompense/recompense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-recompense',
  templateUrl: './list-recompense.component.html',
  styleUrls: ['./list-recompense.component.css']
})
export class ListRecompenseComponent implements OnInit {
  
  listRecompense : Array<any>;
  constructor(private _recompenseService: RecompenseService,private router: Router) { }

  ngOnInit() {
    this._recompenseService.getAllRecompense().subscribe(
      res => {
        this.listRecompense = res;
      },
      error =>{
        console.log(error);
      }
      );
  }
  refresh() {
    this.router.navigate(['/admin/liste-des-recompenses']);
  }
  supprimerRecompense(id){
    this._recompenseService.delete(id).subscribe(
      res => {
        console.log(res);
      },
      error =>{
        console.log(error);
      }
      );
      this.refresh();
  }

}
