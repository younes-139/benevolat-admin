import { Component, OnInit } from '@angular/core';
import { AssociationService } from '../../shared/association/association.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {

  constructor(private associationService: AssociationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.associationService.save(form.value).subscribe(
      result => {
      console.log("added*******"+result);
      form.reset;
      },
      error => console.error(error));
  }
}
