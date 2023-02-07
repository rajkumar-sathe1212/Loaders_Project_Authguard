import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formdata:any;

  constructor(private authService:AuthService,private router:Router){ }

  ngOnInit(): void {

    if(this.authService.isLoggedIn()){
      this.router.navigate(['/admins/users']);
    }



    this.formdata = new FormGroup({
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      password:new FormControl("",Validators.compose([Validators.required]))
    })
  }


  submit(data:any){
    console.log(data);

    let result = this.authService.submit(data);

    if(result.status == "Success"){
      localStorage.setItem("name",result.data.name);
      localStorage.setItem("email",result.data.email);
      localStorage.setItem("userType",result.data.userType);

      this.router.navigate(['/admins/users']);

    }
    else{
      alert("Invalid");
    }

  }

}
