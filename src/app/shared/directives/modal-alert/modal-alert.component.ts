import { Component, OnInit } from '@angular/core';
import { ModalAlertService } from '../../../shared/services/index';

@Component({
  selector: 'app-modal-alert',
  templateUrl: 'modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})

export class ModalAlertComponent implements OnInit {
  message = '';

  constructor(private alertService: ModalAlertService) {
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
