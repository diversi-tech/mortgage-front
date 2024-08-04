import { customerService } from '../Services/costumer.service';
import { ICustomer } from '../Models/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUser } from '../Models/user';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-customer-detail-modal',
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss',
})
export class CustomerDetailModalComponent implements OnInit {
  formData: ICustomer = {
    first_Name: '',
    last_Name: '',
    email: '',
    phone: '',
    address: '',
    connection: 0,
    t_z: '',
    lead_id: 0,
    userid: 0,
    birthDate: '',
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
    isArchived: undefined,
    created_at:undefined,
    updated_at:undefined
  };
  options = [
    { value: 0, viewValue: 'WhatsApp', icon: 'message' },
    { value: 1, viewValue: 'Email', icon: 'email' },
  ];

  family_status = [
    { value: 0, viewValue: "רווק/ה" },
    { value: 1, viewValue: "נשוי/אה" },
    { value: 2, viewValue: "גרוש/ה" },
    { value: 3, viewValue: "אלמנ/ה" },
  ];
  job_status = [
    { value: 0, viewValue: "שכיר/ה" },
    { value: 1, viewValue: "עצמאי/ת" },
  ];
  customer_type = [
    { value: 0, viewValue: "ליד" },
    { value: 1, viewValue: "לקוח" },
    { value: 2, viewValue: "ארכיון" },
  ];
  transaction_type = [
    { value: 0, viewValue: "מכיר למשתכן" },
    { value: 1, viewValue: "חדש" },
    { value: 2, viewValue: "ישן" },
    { value: 3, viewValue: "שיפוץ" },
    { value: 4, viewValue: "אחר" },
  ];

  customerId: number | undefined = undefined;
  data: ICustomer | undefined = undefined;
  isEdit: boolean = false;
  disabled: boolean = true;
  currentCustomerId: number | null | undefined = undefined;
  userList: IUser[] = []; // שינוי המערך למערך של משתמשים
  filteredUsers: IUser[] = [];

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe({
      next: (response) => {
        this.userList = response;
        this.filteredUsers = response;
        this.route.paramMap.subscribe(params => {
          this.customerId = Number(params.get('id'));
          if (this.customerId) {
            this.customerService.getById(this.customerId).subscribe({
              next: (response) => {
                this.formData = { ...response };
                this.currentCustomerId = this.customerId;
                this.disabled = false;
                this.filterusers();
                this.formData.birthDate = this.formatDateToISO(response.birthDate);
                this.formData.lastSynced = this.formatDateToISO(response.lastSynced);
                this.formData.created_at=this.formatDateToISO(response.created_at);
                this.formData.updated_at=this.formatDateToISO(response.updated_at);

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
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  formatDateToISO(dateString: string): string {
    const date = parseISO(dateString);
    return format(date, 'yyyy-MM-dd'); // yyyy-MM-dd
  }

  filterusers() {
    this.filteredUsers = this.userList.filter(user => user.email == this.formData.email);
  }

  constructor(
    private customerService: customerService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
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
  cancel() {
    this.router.navigate(['admin/customer-list']);
  }
}

