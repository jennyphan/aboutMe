import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [DatabaseService]
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getRegisteredUser('').subscribe(data => this.users = data);
  }

  refresh() {
    this.database.getRegisteredUser('').subscribe(data => this.users = data);
  }

}
