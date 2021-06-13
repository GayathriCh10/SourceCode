import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingComponent } from './booking/booking.component';
import { DicountComponent } from './dicount/dicount.component';
import { FlightsComponent } from './flights/flights.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { ManageairlineComponent } from './manageairline/manageairline.component';
import { ResultComponent } from './result/result.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'result', component:ResultComponent},
  {path:'flights', component:FlightsComponent},
  {path:'booking', component:BookingComponent},
   {path:'admin', component:AdminComponent},
   {path:'managearline', component:ManageairlineComponent},
   {path:'user', component:UserComponent},
   {path:'addflight', component:AddFlightComponent},
   {path:'manageSchedule', component:ManageScheduleComponent},
   {path:'update', component:UpdateFlightComponent},
   {path:'booking-history', component:BookingHistoryComponent},
   {path:'manage-discount', component:DicountComponent},
   {path:'book-flight', component:FlightsComponent},
   {path:'adminLogin', component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
 export const routingComponents = [ResultComponent,FlightsComponent,BookingComponent]
