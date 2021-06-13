import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserService from '../service/UserService';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.sass']
})
export class AdminLoginComponent implements OnInit {

  message:boolean;
  constructor(private adminService:UserService,public route:Router) {
this.message=true;

   }

  ngOnInit(): void {
  }

  adminLogin(adminId:string,password:string){
    if(adminId=='admin' && password=='admin'){
      sessionStorage.setItem('adminId',adminId);
this.message=true;
this.route.navigate(["admin"])


    }
    else
    this.message=false;


  }

}
