import { EmailValidator } from "@angular/forms";

export default class Bookflight{
    oneWay:string='';
    roundTrip:string='';
    airlineName:string='';
    name:string='';
    email:string='';
    depature:string='';
    arrival:string='';
    onwardJourney:Date=new Date();
    returnJourney:Date=new Date();
    startTime:string='';
    endTime:string='';
    airlineLogo:string='';
    discountCode:string='';
    onwardSeat:string='';
    returnSeat:string='' ; 
   flightNumber:string='';
    mealPreference:string='';
   price:number=0;
    selectSeat:string='' ; 
    gender:string=''; 
    duration:string='';
}
    