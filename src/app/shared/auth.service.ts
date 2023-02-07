import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string){
    localStorage.setItem("Token",token);
  }

  getToken(){
    return localStorage.getItem("Token");
  }

  isLoggedIn(){
    if(localStorage.getItem("Token")!=null){
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['']);
  }


  submit(data:any):any{
    if(data.email == "r@gmail.com" && data.password == "1212"){
      this.setToken("asdflkjhwperyqywtfsfduspoteruijkjcbsvsadfsafewrtrgdfvbxcwerfvb");
      return {status:"Success",data:{name:"Rajkumar",email:"r@gmail.com",userType:"Admin"}};
    }
    else if(data.email == "manager@gmail.com" && data.password == "1212"){
      this.setToken("asdflkjhwperyqywtfsfduspoteruijkjcbsvsadfsafewrtrgdfvbxcwerfvb");
      return {status:"Success",data:{name:"Manager",email:"manager@gmail.com",userType:"Manager"}};
    }
    else{
      return {status:"Failed"};
    }
  }
}
