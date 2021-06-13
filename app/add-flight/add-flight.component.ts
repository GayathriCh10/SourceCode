import { Component, OnInit } from '@angular/core';
import Flights from '../entity/Flights';
import FlightService from '../service/FlightServie';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.sass']
})
export class AddFlightComponent implements OnInit {
 constructor(private flightService: FlightService) { }
 flight: Flights = new Flights(); //state
 flights: Flights[] = []; //state
 ngOnInit(){
   

 }

 save(){
  console.log(this.flight.airlineName);
  const promise = this.flightService.addFlight(this.flight);    
  promise.subscribe(function(response){
    console.log(response);
    alert('added successfully')
    
  },
  function(error){
    alert(error.message);
  },
  function(){console.log('default will always called')

  }
  )
}






}
