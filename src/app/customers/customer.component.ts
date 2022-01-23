import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer(); // data model

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // form model  //{ value: 'n/a', disabled: true },
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '', 
      email: '',
      sendCatalog: true
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
