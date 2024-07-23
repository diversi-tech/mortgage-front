import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../Services/user.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { customerService } from '../../Services/costumer.service';
import { Customer } from '../../Models/Customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    MatCardModule,
    MatDivider,
    MatSlideToggleModule,
  ],
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CustomerDetailModalComponent implements OnInit {

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

  family_status = [
    { value: 0, viewValue: "Single" },
    { value: 1, viewValue: "Married" },
    { value: 2, viewValue: "Divorced" },
    { value: 3, viewValue: "Widow" },
  ];
  job_status = [
    { value: 0, viewValue: "Employed" },
    { value: 1, viewValue: "SelfEmployed" },
  ];
  customer_type = [
    { value: 0, viewValue: "lead" },
    { value: 1, viewValue: "customer" },
    { value: 2, viewValue: "admin" },
  ];
  transaction_type = [
    { value: 0, viewValue: "Price_per_tenant" },
    { value: 1, viewValue: "New" },
    { value: 2, viewValue: "Old" },
    { value: 3, viewValue: "Renovation" },
    { value: 4, viewValue: "Other" },
  ];

  customerId: number | undefined = undefined;
  data: Customer | undefined = undefined;
  isEdit: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = Number(params.get('id'));
      if (this.customerId) {
        console.log(`Customer ID: ${this.customerId}`);
        this.data = this.customerService.getById(this.customerId).subscribe({
          next: (response) => {
            console.log('Customer come successfully:', response.birthDate);
            this.formData = { ...response };
          },
          error: (error) => {
            console.error('Error creating customer:', error);
          }
        });
        //this.formData = { ...this.data };
        console.log("data", this.data);
        this.isEdit = true;
      } else {

        console.log('No Customer ID');
      }
    });
  }
  constructor(
    private customerService: customerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  submitForm(customerForm: any) {
    if (this.isEdit) {
      console.log(this.isEdit, this.formData);
      this.customerService.updateCustomer(this.customerId, this.formData).subscribe({});
    }
    else {
      console.log(this.formData);
      this.customerService.createCustomer(this.formData).subscribe({
        next: (response) => {
          console.log('Customer created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating customer:', error);
        }
      });
    }
  }

}