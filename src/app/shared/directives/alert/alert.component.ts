import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../shared/services/index';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  message = '';

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
