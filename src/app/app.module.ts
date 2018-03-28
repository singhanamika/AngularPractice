import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from 'app/filter.pipe';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import	{MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
//import { EmailService } from 'app/email.service';
import {MatTableModule} from '@angular/material/table';
//import { ReusableComponent } from './reusable/reusable.component';
import { UsertableComponent } from './usertable/usertable.component';
//import { UserService } from 'app/user.service';
import { KeyspipePipe } from './keyspipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
	FilterPipe,
	//ReusableComponent,
	UsertableComponent,
	KeyspipePipe
	
  ],
  imports: [
    BrowserModule,
	FormsModule,
	
	BrowserAnimationsModule,
	MatInputModule,
	MatDatepickerModule,
	MatNativeDateModule,
	HttpClientModule,
	MatIconModule,
	MatTableModule
  ],
  providers: [
 
 //EmailService,
 //UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
