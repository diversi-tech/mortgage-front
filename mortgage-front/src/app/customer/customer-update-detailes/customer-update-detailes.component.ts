import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { customerService } from '../../shared/Services/costumer.service';
import { ICustomer } from '../../shared/Models/Customer';
import { loginService } from '../../shared/Services/login.service';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'customer-update-detailes',
  templateUrl: './customer-update-detailes.component.html',
  styleUrl: './customer-update-detailes.component.css'
})
export class CustomerUpdateDetailesComponent {
  formData: ICustomer = {
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

  constructor(
    private customerService: customerService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: loginService
  ) { }

  customerId: number | undefined = this.loginService.GetCurrentUser().customerId;

  ngOnInit(): void {
    const id = this.loginService.GetCurrentUser().customerId
    
    if (id) {
      this.customerService.getById(id).subscribe({
        next: (response) => {
          this.formData = { ...response };
          this.formData.birthDate=this.formatDateToISO(response.birthDate);
        },
        error: (error) => {
          console.error('Error creating customer:', error);
        }
      });
    } else {
      console.log('No Customer ID');
    }

  }

  formatDateToISO(dateString: string): string {
    const date = parseISO(dateString);
    return format(date, 'yyyy-MM-dd'); // yyyy-MM-dd
  }


  submitForm() {
    this.customerService.updateCustomer(this.customerId, this.formData).subscribe({});
    this.router.navigate(['/customer']);
  }
  cancel() {
    this.router.navigate(['/customer']);
  }
}
