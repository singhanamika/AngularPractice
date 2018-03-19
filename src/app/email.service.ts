import { Course } from './course';
import { COURSES } from './mock-courses';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmailService {
getCourses(): Observable<Course[]> {
  return of(COURSES);
}
  constructor() { }

}
