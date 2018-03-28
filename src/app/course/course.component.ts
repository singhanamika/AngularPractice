//import { EmailService } from 'app/email.service';
//import { Http } from '@angular/http';
import { Component, OnInit} from '@angular/core';
//import { Course } from '../course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
	//specific_name : Object
	//Title = "Name of Courses";
/*Courses :[{
id: string},
{name : string},
        
    ]*/
	//Courses: any[];
  
	//posts: any[];
 // constructor(private http:Http) { }
 // doGET(){
	  
 //this.http.get('https://jsonplaceholder.typicode.com/posts')
       //  .subscribe(response =>{
			 
		//	 this.posts = response.json();
		// });
// }
		 
	//ngOnInit() {
  //} 
	

  //constructor(service: EmailService) {
//this.Courses = service.getCourses();
// Make instance/object of Service
//But this method is not good for unit testing coz objects are tightely coupled. 

/*let service = new EmailService();
this.Courses = service.getCourses(); */

// DEPENDENCY INJECTION


 // }
/*  OnKeyUp(){
	
	console.log(this.search);
	
}*/
/*row(Courses){
	
console.log(this.Courses.name);

	
	
}*/
//myDate = new Date();
/*clicked(C: any){

    this.specific_name = C

  }*/
 // courses: Course[]; 
 //selectedHero: Hero;
 //onSelect(hero: Hero): void {
 // this.selectedHero = hero;
 
//}

 /* constructor() { }
  getCourses(): void {
  this.emailService.getCourses()
      .subscribe(courses => this.courses = courses);
}

  ngOnInit() {
	  this.getCourses();
  } */
  course1 = {course:	[
  { id: 11, name: "Mr. Nice", age: 15, subject: "Science", hh: 1, ll: 12},
  { id: 12, name: "Narco", age: 15, subject: "Science" },
  { id: 13, name: 'Bombasto', age: 15, subject: 'Science'  },
  { id: 14, name: 'Celeritas' , age: 15, subject: 'Science' },
  { id: 15, name: 'Magneta', age: 15, subject: 'Science'  },
  { id: 16, name: 'RubberMan', age: 15, subject: 'Science'  },
  { id: 17, name: 'Dynama', age: 15, subject: 'Science'  },
  { id: 18, name: 'Dr IQ', age: 15, subject: 'Science'  },
  { id: 19, name: 'Magma', age: 15, subject: 'Science'  },
  { id: 20, name: 'Tornado', age: 15, subject: 'Science'  }
  
]};
 constructor() { }
  
  ngOnInit() {
	 
  } 
}
