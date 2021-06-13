import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './header/header.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingComponent } from './booking/booking.component';
import { DicountComponent } from './dicount/dicount.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ManageairlineComponent } from './manageairline/manageairline.component';
import UserService from './service/UserService';
import BookingService from './service/BookingService';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import FlightService from './service/FlightServie';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HeaderComponent,
    FlightsComponent,
    BookingComponent,
    DicountComponent,
    UserComponent,
    AdminComponent,
    ManageairlineComponent,
    AddFlightComponent,
    ManageScheduleComponent,
    UpdateFlightComponent,
    BookingHistoryComponent,
    UserLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [UserService,BookingService,FlightService],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
