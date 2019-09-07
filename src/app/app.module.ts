import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './hmis/department/department.component';
import { DoctorComponent } from './hmis/doctor/doctor.component';
import { HospitalComponent } from './hmis/hospital/hospital.component';
import { PatientComponent } from './hmis/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DoctorComponent,
    HospitalComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
