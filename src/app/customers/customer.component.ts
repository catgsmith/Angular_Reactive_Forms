import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer(); // data model

  constructor() { }

  ngOnInit(): void {
    // form model
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData(): void {
    // use setValue when setting all of the form controls on the form
      this.customerForm.patchValue({
        firstName: 'Jack',
        lastName: 'Harkness',
        // email: 'jack@torchwood.com',
        sendCatalog: false
      });
  }
}
