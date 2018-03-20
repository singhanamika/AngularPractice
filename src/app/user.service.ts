import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User} from 'app/user.model';

@Injectable()
export class UserService {
private serviceUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }
getUser(): Observable<User[]> {
  return this.http.get<User[]>(this.serviceUrl);
}
}
