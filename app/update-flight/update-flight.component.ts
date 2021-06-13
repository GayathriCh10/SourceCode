import { Component, OnInit } from '@angular/core';
import Flights from '../entity/Flights';
import FlightService from '../service/FlightServie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.sass']
})
export class UpdateFlightComponent implements OnInit {

  flightId: number=0;
  constructor(private flightService: FlightService,private route: ActivatedRoute) { }
 flight: Flights = new Flights(); //state
 flights: Flights[] = []; //state

  ngOnInit(): void {

    
  }

update(){
  this.route.queryParams.subscribe(params  => {
    this.flightId=params['flightId'];
   
} 

);

const promise = this.flightService.updateFligt(this.flightId,this.flight) 
  promise.subscribe(function(response){
    console.log(response);
    alert('Updated successfully')
    
  },
  function(error){
    alert(error.message);
  },
  function(){console.log('default will always called')

  }
  )

}

}
