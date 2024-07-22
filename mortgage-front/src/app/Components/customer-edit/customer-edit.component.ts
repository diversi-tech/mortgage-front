import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Models/Customer';
import { customerService } from '../../Services/costumer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit {
  formData: Customer = {
    first_Name: '',
    last_Name: '',
    email: '',
    phone: '',
    adress: '',
    connection: 0,
    t_z: '',
    birthDate: new Date(),
    family_status: 0,
    number_of_people_in_house: 0,
    job_status: 0,
    work_business_name: '',
    customer_type: 0,
    job_description: '',
    years_in_current_position: 0,
    avarage_monthly_salary: 0,
    income_rent: 0,
    income_Government_Endorsement: 0,
    income_other: 0,
    expenses_rent: 0,
    expenses_loans: 0,
    expenses_other: 0,
    property_city: '',
    transaction_type: 0,
    estimated_price_by_customer: 0,
    estimated_price_by_sales_agreement: 0,
    has_other_properties: false,
    amount_of_loan_requested: 0,
    lastSynced: new Date(),
    isArchived: false
  };

  options = [
    { value: 0, viewValue: 'Whatup', icon: 'message' },
    { value: 1, viewValue: 'Email', icon: 'email' },
  ];
  customerId: number | undefined = undefined;
  data: Customer | undefined = undefined;

  constructor(private customerService: customerService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    localStorage.setItem('currentId', '1009');
    this.customerId = Number(localStorage.getItem('currentId'));
    this.data=this.customerService.getById(this.customerId).subscribe({
      next: (response) => {
        console.log('Customer come successfully:', response.birthDate);
        this.formData={...response};
      },
      error: (error) => {
        console.error('Error creating customer:', error);
      }
    });
    console.log(`Customer ID: ${this.customerId}`);
    //this.formData = { ...this.data };
    console.log("data", this.data);

  }


  submitForm() {
    this.customerService.updateCustomer(this.customerId, this.formData).subscribe({});
  }
}
