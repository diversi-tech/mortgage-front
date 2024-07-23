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
    first_Name: null,
    last_Name: null,
    email: null,
    phone: null,
    address: null,
    connection: null,
    t_z: null,
    lead_id: 0,
    birthDate: null,
    family_status: null,
    number_of_people_in_house: null,
    job_status: null,
    work_business_name: null,
    customer_type: null,
    job_description: null,
    years_in_current_position: null,
    avarage_monthly_salary: null,
    income_rent: null,
    income_Government_Endorsement: null,
    income_other: null,
    expenses_rent: null,
    expenses_loans: null,
    expenses_other: null,
    property_city: null,
    transaction_type: null,
    estimated_price_by_customer: null,
    estimated_price_by_sales_agreement: null,
    has_other_properties: false,
    amount_of_loan_requested: null,
    lastSynced: null,
    isArchived: null
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
    this.customerService.updateCustomer(this.customerId, this.formData).subscribe({
      next: (response) => {
        console.log('Customer updated successfully:', response);
      },
      error: (error) => {
        console.error('Error creating customer:', error);
      }
    });
  }
}
