import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { RecompenseService } from '../../shared/recompense/recompense.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-ajouter-recompense',
  templateUrl: './ajouter-recompense.component.html',
  styleUrls: ['./ajouter-recompense.component.css']
})
export class AjouterRecompenseComponent implements OnInit {

  constructor(private _recompenseService: RecompenseService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this._recompenseService.save(form.value).subscribe(
      result => {
      console.log("added*******"+result);
      },
      error => {
        console.log("********"+error);
        console.error(error);
      }
      );
  }

}
