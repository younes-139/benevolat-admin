import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private _authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  onSubmit(form : NgForm){
    this._authenticationService.logIn(form.value).subscribe(
      result => {
        sessionStorage.setItem("id_admin",result.id);
        this.router.navigate(['admin/dashboard']);
      },
      error => console.error(error));
  }
}