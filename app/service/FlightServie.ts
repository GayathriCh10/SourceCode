import { Injectable } from "@angular/core";

import {HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import Bookflight from "../entity/Bookflight";
import SearchedFlightDetails from "../entity/SearchedFlightDetails";
import Flights from "../entity/Flights";


const Base_Url = "http://localhost:8081/api/";
@Injectable()
export default class FlightService{
  
    constructor(private http:HttpClient){ }
    getFlightDetails(){
        return this.http.get(Base_Url+"manageSchedule");
    }
    addFlight(flight:Flights){
        console.log(flight);
        return this.http.post(Base_Url+"addflight/",flight)
    }
    getSearchedFlights(depature:any,arrival:any) {
        return this.http.get(Base_Url+"result/"+depature+"/"+arrival);
        
        
    }
    deleteFligt(flightId:number){
        return this.http.delete(Base_Url+"manageSchedule/"+flightId);
    }
    updateFligt(flightId:any,flight:Flights){
        return this.http.put(Base_Url+"update/"+flightId,flight);
    }
}