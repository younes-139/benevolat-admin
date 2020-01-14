import { Component, OnInit } from '@angular/core';
import { AssociationService } from '../../shared/association/association.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-ajouter-association',
  templateUrl: './ajouter-association.component.html',
  styleUrls: ['./ajouter-association.component.css']
})
export class AjouterAssociationComponent implements OnInit {
  public associationImage: any = File;
  constructor(private associationService: AssociationService) { }

  ngOnInit() {
  }
  onselectImage(event) {
    const file = event.target.files[0];
    this.associationImage = file;
  }

  onSubmit(form: NgForm){
    console.log(form.value);

    const formData = new FormData();
    formData.append('image',this.associationImage);
    formData.append('nom',form.value.nom);
    formData.append('adresse1',form.value.adresse1);
    formData.append('adresse2',form.value.adresse1);
    formData.append('description',form.value.description);
    formData.append('domaine',form.value.domaine);
    formData.append('email',form.value.email);
    formData.append('mdp',form.value.mdp);
    formData.append('tel',form.value.tel);
    formData.append('ville',form.value.ville);
    formData.append('localisation',form.value.ville);
    
    this.associationService.save(formData).subscribe(
      result => {
        console.log("added*******"+result);
      },
      error => console.error(error));
  }
}
