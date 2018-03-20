import { Component, OnInit } from '@angular/core';
import {UserService} from 'app/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User} from 'app/user.model';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
displayedColumns = ['UserId','id','title'];
  dataSource = new UserDataSource(this.userService);
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any> {
	constructor(private userService: UserService){super();}
	
		
	
	
	connect(): Observable<User[]>{
		return this.userService.getUser();
	}
	disconnect(){}
}
