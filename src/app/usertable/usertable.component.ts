import { Component, OnInit, Input } from '@angular/core';
//import {UserService} from 'app/user.service';
//import { Observable } from 'rxjs/Observable';
//import { DataSource } from '@angular/cdk/collections';
//import { User} from 'app/user.model';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
//displayedColumns = ['UserId','id','title'];
  //dataSource = new UserDataSource(this.userService);
  public arrayOfKeys;
  @Input() course: Array<Object>=[];
  constructor() { this.arrayOfKeys = Object.keys(this.course);}

  ngOnInit() {
  }

}
