import { Component, OnInit } from '@angular/core';
import SearchedFlightDetails from '../entity/SearchedFlightDetails';
import SearchFlight from '../entity/SearchFlight';

import Flights from '../entity/Flights';
import FlightService from '../service/FlightServie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {

  fromLoc: string='';
  toLoc: string='';

  
  
  flight: Flights = new Flights(); //state

  
  flights: Flights[] = []; //state

  constructor(private flightService: FlightService,private route: ActivatedRoute) { }
  searchFlight: SearchFlight = new SearchFlight(); //state

  availFlightDetail: SearchedFlightDetails = new SearchedFlightDetails(); //state
  availFlightDetails: SearchedFlightDetails[] = []; //state

 
  ngOnInit(): void {

  }

  search(){
   
    const promise = this.flightService.getSearchedFlights("Bengalore","Hyderabad");
    
    promise.subscribe((response) => {
      this.flights = response as Flights[];
    });
   
  }
  

}
