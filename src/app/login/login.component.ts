import { NavbarService } from './../navbar/navbar.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


class Login{
  constructor(
      public username: String='sridivya',
      public email: String='sridivya.kencha@gmail.com'){
          
      }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login=new Login();
  constructor(private nav:NavbarService,private router: Router) { 
    
  }

  ngOnInit() {
    this.nav.visible = false;
  }

  onSubmit(){
      this.nav.visible = true;
      this.router.navigate(['/home']);
      // console.log("login success");
      
  
  }

}
