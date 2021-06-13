import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Bookflight from '../entity/Bookflight';
import Flights from '../entity/Flights';
import UserTicketDetails from '../entity/UserTicketDetails';
import BookingService from '../service/BookingService';
import FlightService from '../service/FlightServie';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {

  
  fromLoc: string='';
  toLoc: string='';
  constructor(private bookingService: BookingService,private flightListService: FlightService,
    private route: ActivatedRoute) { }
  bookFlight: UserTicketDetails = new UserTicketDetails(); //state
  bookFlights: UserTicketDetails[] = []; //state

  flight: Flights = new Flights(); //state
  flights: Flights[] = []; //state


  ngOnInit() {
    this.route.queryParams.subscribe(params  => {
        this.fromLoc=params['fromLoc'];
        this.toLoc=params['toLoc'];
       return this.searchFlights(this.fromLoc,this.toLoc);
    } 
  
);
  }

  bookTicket(){
   

    this.flights= this.searchFlights(this.fromLoc,this.toLoc);

this.bookFlight.depature=this.flights[0].depature;
this.bookFlight.duration=this.flights[0].duration;
this.bookFlight.endTime=this.flights[0].startTime;
this.bookFlight.startTime=this.flights[0].endTime;
this.bookFlight.airlineName=this.flights[0].airlineName;
this.bookFlight.flightNumber=this.flights[0].flightNumber;
this.bookFlight.arrival=this.flights[0].arrival;
this.bookFlight.price=this.flights[0].price;
    



   const promise = this.bookingService.bookFlight(this.bookFlight);    
   promise.subscribe(function(response){
     console.log(response);
     alert('ticket booking done successfully')
     
   },
   function(error){
     alert(error.message);
   },
   function(){console.log('default will always called')

   }
   )
 }
 searchFlights(fromLoc:string,toLoc:string) : Flights[]{
   
  const promise = this.flightListService.getSearchedFlights(fromLoc,toLoc);
  promise.subscribe((response) => {
   return this.flights = response as Flights[];
  });
  return this.flights;
}
 


}
