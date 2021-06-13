import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import Bookflight from "../entity/Bookflight";
import UserTicketDetails from "../entity/UserTicketDetails";
const Base_Url = "http://localhost:8081/api/";
@Injectable()
export default class BookingService{
    constructor(private http:HttpClient){ }
    getBookingDetails(){
        return this.http.get(Base_Url);
    }
    getBookingDetailsByMail(email:string){
        return this.http.get(Base_Url+"booking-history/"+email);
    }
    bookFlight(flight:UserTicketDetails){
        console.log(flight);
        return this.http.post(Base_Url+"book-flight/",flight)
    }
    cancelTicket(email:string)
    {
        return this.http.delete(Base_Url+"booking-history/"+email)
    }
    
}