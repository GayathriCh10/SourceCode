import { Component, OnInit } from '@angular/core';
import Airline from '../entity/Airline';
import UserService from '../service/UserService';

@Component({
  selector: 'app-manageairline',
  templateUrl: './manageairline.component.html',
  styleUrls: ['./manageairline.component.sass']
})
export class ManageairlineComponent implements OnInit {

  constructor(private airlineService: UserService) { }
  airline: Airline = new Airline(); //state
  airlines: Airline[] = []; //state
  ngOnInit(){
    const promise= this.airlineService.getUsers();
    promise.subscribe((response) =>{
      console.log(response);
      this.airlines= response as Airline[];
    })

  }

  save(){
   console.log(this.airline.airlineName);
   const promise = this.airlineService.save(this.airline);    
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
