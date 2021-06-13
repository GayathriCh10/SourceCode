import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import Airline from "../entity/Airline";
const Base_Url = "http://localhost:8081/api/";
@Injectable()
export default class UserService{
    constructor(private http:HttpClient){ }
    getUsers(){
        return this.http.get(Base_Url);
    }
    save(user:Airline){
        console.log(user);
        return this.http.post(Base_Url+"managearline/",user)
    }
    deleteAirline(id:any){
        return this.http.delete(Base_Url+"?airlineNumber="+id)
    }

    updateAirlineDetails(airlineName:string,flightNumber:string){

        
        return this.http.put(Base_Url,{params: new HttpParams().set('airlineName' , airlineName)
    .set('flightNumber',flightNumber)});
    }
    
    getAirlineDetails(airlineName:string,flightNumber:string){

        
        return this.http.get(Base_Url,{params: new HttpParams().set('airlineName' , airlineName)
    .set('flightNumber',flightNumber)});
    }

    adminlogin(){
        return this.http.get(Base_Url+"admin/");
    }
    userlogin(){
        return this.http.get(Base_Url+"user/");
    }

}