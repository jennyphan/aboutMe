import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from '../shared/model/contact';
import { DatabaseService } from '../shared/services/database.service';
import { AlertService, AuthenticationService } from '../shared/services/index';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [DatabaseService]
})

export class ContactComponent implements OnInit {
  public lastName: FormControl;
  public firstName: FormControl;
  public email: FormControl;
  public comments: FormControl;

  public SUCCESS_MSG = 'Submitted successfully';

  contactForm: FormGroup;
  contact: Contact;

  constructor(private database: DatabaseService, private authenticationService: AuthenticationService,
    private alertService: AlertService, fb: FormBuilder) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();

  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.comments = new FormControl('', [Validators.required]);
  }

  clearForm() {
    this.contactForm.reset();
  }

  createFormGroup() {
    this.contactForm = new FormGroup({
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      comments: this.comments,

    });
  }

  createComment() {

    if (this.contactForm.invalid) {
      return;
    }
    const lastname = { lastName: this.contactForm.get('lastName').value };
    const firstname = { firstName: this.contactForm.get('firstName').value };
    const Email = { email: this.contactForm.get('email').value };
    const Comments = { comments: this.contactForm.get('comments').value };


    this.database.createComment(lastname, firstname, Email, Comments).subscribe(
      data => {
        this.alertService.success(this.SUCCESS_MSG);
        return true;
      },
      error => {
        this.alertService.error('Error creating contact info');
        return Observable.throw(error);
      }
    );
  }


}
