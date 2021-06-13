import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Bookflight from '../entity/Bookflight';
import BookingService from '../service/BookingService';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.sass']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private bookingService: BookingService) { }
  bookFlight: Bookflight = new Bookflight(); //state
  bookFlights: Bookflight[] = []; //state
  ngOnInit(): void{

  }

  history(email:any) : Bookflight[]{
    const promise= this.bookingService.getBookingDetailsByMail(email);
    promise.subscribe((response) =>{
      console.log(response);
      this.bookFlights= response as Bookflight[];
    
    })
return this.bookFlights;
  }
  


  cancel(email:any){
    
    const promise= this.bookingService.cancelTicket(email);
    promise.subscribe(function(response){
      console.log(response);
      alert('deleted ticket')
      
    })
  
   }



}
