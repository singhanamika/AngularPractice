
import { FilterPipe } from 'app/filter.pipe';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import	{MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from 'app/email.service';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
	FilterPipe
  ],
  imports: [
    BrowserModule,
	FormsModule,
	
	BrowserAnimationsModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule
  ],
  providers: [
 
  EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
