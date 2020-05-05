import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [DatabaseService]
})
export class ContactListComponent implements OnInit {


  public contacts: any = [];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getComments('').subscribe(data => this.contacts = data);
  }

  refresh() {
    this.database.getComments('').subscribe(data => this.contacts = data);
  }

}
