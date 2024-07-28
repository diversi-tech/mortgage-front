import { customerService } from '../Services/costumer.service';
import { Customer } from '../Models/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail-modal',
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss',
})
export class CustomerDetailModalComponent implements OnInit {


  formData:Customer = {
    id: 0,
    lead_id: 0,
    last_Name: '',
    first_Name: '',
    email: '',
    phone: '',
    connection: 0,
    t_z: '',
    birthDate: new Date(Date.now()),
    family_status: 0,
    number_of_people_in_house: 0,
    address: '',
    job_status: 0,
    // customer_type: 0,
    work_business_name: '',
    job_description: '',
    avarage_monthly_salary: 0,
    years_in_current_position: 0,
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
    lastSynced: new Date(Date.now()),
    isArchived: false,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now())
  };
  options = [
    { value: 0, viewValue: 'WhatsApp', icon: 'message' },
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
  disabled: boolean = true;
  currentCustomerId: number | null | undefined = undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = Number(params.get('id'));
      if (this.customerId) {
        console.log(`Customer ID: ${this.customerId}`);
        this.customerService.getById(this.customerId).subscribe({
          next: (response) => {
            this.formData = { ...response };
            this.currentCustomerId = this.customerId;
            this.disabled = false;
          },
          error: (error) => {
            console.error('Error creating customer:', error);
          }
        });
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

  submitForm() {
    if (this.isEdit) {
      this.customerService.updateCustomer(this.customerId, this.formData).subscribe({});
    }
    else {
      this.customerService.createCustomer(this.formData).subscribe({
        next: (response) => {
          this.currentCustomerId = response.id;
          this.disabled = this.currentCustomerId ? false : true;
        },
        error: (error) => {
          console.error('Error creating customer:', error);
        }
      });
    }
    this.router.navigate(['admin/customer-list']);
  }
  cancel(){
    this.router.navigate(['admin/customer-list']);
  }
}