import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecompenseService } from '../../shared/recompense/recompense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-recompense',
  templateUrl: './ajouter-recompense.component.html',
  styleUrls: ['./ajouter-recompense.component.css']
})
export class AjouterRecompenseComponent implements OnInit {

  constructor(private _recompenseService: RecompenseService, private router: Router) { }

  ngOnInit() {
  }
  goToList() {
    this.router.navigate(['/admin/liste-des-recompenses']);
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this._recompenseService.save(form.value).subscribe(
      result => {
      console.log(result);
      },
      error => {
        console.error(error);
      }
      );
      this.goToList();
  }

}
