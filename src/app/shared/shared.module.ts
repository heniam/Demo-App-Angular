import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ContactComponent } from './contact.component';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
