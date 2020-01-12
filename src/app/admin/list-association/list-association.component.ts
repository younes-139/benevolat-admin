import { Component, OnInit } from '@angular/core';
import { AssociationService } from '../../shared/association/association.service';

@Component({
  selector: 'app-list-association',
  templateUrl: './list-association.component.html',
  styleUrls: ['./list-association.component.css']
})
export class ListAssociationComponent implements OnInit {
  listAssociation : Array<any>;
  constructor(private associationService : AssociationService) { }

  ngOnInit() {
    this.associationService.getAllAssociation().subscribe(
      res => {
        this.listAssociation = res._embedded.assosiations;
        console.log(this.listAssociation);
      },
      error =>{
        console.log(error);
      }
      );
  }

}
