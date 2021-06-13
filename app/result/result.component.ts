import { Component, OnInit } from '@angular/core';
import SearchedFlightDetails from '../entity/SearchedFlightDetails';
import SearchFlight from '../entity/SearchFlight';

import { ActivatedRoute } from '@angular/router';
import Flights from '../entity/Flights';
import FlightService from '../service/FlightServie';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent implements OnInit {

  fromLoc: string='';
  toLoc: string='';
  

  constructor(private flightListService: FlightService,private route: ActivatedRoute) { }
  
  flight: Flights = new Flights(); //state
  
  
  flights: Flights[] = []; //state

  ngOnInit() : Flights[] {
    this.route.queryParams.subscribe(params  => {
        this.fromLoc=params['fromLoc'];
        console.log(this.fromLoc);
      
        this.toLoc=params['toLoc'];
        console.log(this.fromLoc);
      this.flights=  this.searchFlights(this.fromLoc,this.toLoc);
      
    } 
    
  
);
return this.flights;
  }
  searchFlights(fromLoc:string,toLoc:string) :Flights[] {
    
    console.log(this.fromLoc);
    const promise = this.flightListService.getSearchedFlights(fromLoc,toLoc);
    console.log(this.fromLoc);
    promise.subscribe((response) => {
      this.flights = response as Flights[];
    });
    return this.flights;
  }

}
