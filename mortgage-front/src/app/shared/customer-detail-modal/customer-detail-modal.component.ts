import { customerService } from '../Services/costumer.service';
import { ICustomer } from '../Models/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail-modal',
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss',
})
export class CustomerDetailModalComponent implements OnInit {
  formData:ICustomer = {
    first_Name: '',
    last_Name: '',
    email: '',
    phone: '',
    address: '',
    connection: 0,
    t_z: '',
    lead_id: 0,
    birthDate: undefined,
    family_status: undefined,
    number_of_people_in_house: undefined,
    job_status: undefined,
    work_business_name: undefined,
    customer_type: undefined,
    job_description: undefined,
    years_in_current_position: undefined,
    avarage_monthly_salary: undefined,
    income_rent: undefined,
    income_Government_Endorsement: undefined,
    income_other: undefined,
    expenses_rent: undefined,
    expenses_loans: undefined,
    expenses_other: undefined,
    property_city: undefined,
    transaction_type: undefined,
    estimated_price_by_customer: undefined,
    estimated_price_by_sales_agreement: undefined,
    has_other_properties: false,
    amount_of_loan_requested: undefined,
    lastSynced: undefined,
    isArchived: undefined
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
  data: ICustomer | undefined = undefined;
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