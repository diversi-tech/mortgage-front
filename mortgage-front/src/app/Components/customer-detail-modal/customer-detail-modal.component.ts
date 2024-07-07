import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { CustomerServiceService } from '../../services/customer-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-customer-detail-modal',
  standalone: true,
<<<<<<< HEAD
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule
    //HttpClient
  ],
=======
  imports: [ReactiveFormsModule,MaterialModule,CommonModule],
>>>>>>> 1d9642c23d8cf451813b93b7eae866b85b6b76c1
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
<<<<<<< HEAD
export class CustomerDetailModalComponent implements OnInit {
  isEditMode: boolean = false;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  adress: string = '';
  selectedOption: string = '';
  // options: string[] = ['whatup', 'Email', 'Website'];
  //selectedOption: string = '';
  options: any[] = [
    { value: 'whatup', viewValue: 'Whatup', icon: 'message' },
    { value: 'Email', viewValue: 'Email', icon: 'email' },
    { value: 'Website', viewValue: 'Website', icon: 'public' }
  ];





  constructor(private userService: UserService, private customerService: CustomerServiceService) { }
  customerdata: any;



  ngOnInit(): void {
    sessionStorage.setItem('customerid', '1002');
    const customervalue = sessionStorage.getItem('customerid');
    const customerId: number | null = customervalue !== null ? Number(customervalue) : null;
    console.log(customerId);

    if (customerId !== null) {
      this.customerService.getById(customerId).subscribe(
        response => {
          this.customerdata = response;
          console.log("hi", this.customerdata);
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    } else {
      console.error('User ID is null');
    }
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  submitForm() {
    // const formValues = {
    //   first_Name:this.firstName|| this.customerdata.first_Name || '',
    //   last_Name:this.lastName|| this.customerdata.last_Name || '',
    //   email:this.email|| this.customerdata.email || '',
    //   phone:this.phone|| this.customerdata.phone || '',
    //   address:this.adress|| this.customerdata.address || '',
    //   connection: this.selectedOption || this.customerdata.connection || ''
    // };
    const currentDate = new Date().toISOString();
    const formValues = {
      lead_id: this.customerdata.lead_id || 0,
      first_Name: this.firstName || this.customerdata.first_Name || '',
      last_Name: this.lastName || this.customerdata.last_Name || '',
      email: this.email || this.customerdata.email || '',
      phone: this.phone || this.customerdata.phone || '',
      address: this.adress || this.customerdata.address || '',
      connection:  this.customerdata.connection || 0,
      t_z:  this.customerdata.t_z || 'string',
      birthDate:  this.customerdata.birthDate || '2024-06-30T08:02:22.761',
      family_status: this.customerdata.family_status || 0,
      number_of_people_in_house:  this.customerdata.number_of_people_in_house || 0,
      job_status:  this.customerdata.job_status || 0,
      work_business_name: this.customerdata.work_business_name || 'try',
      job_description:  this.customerdata.job_description || 'try',
      avarage_monthly_salary:  this.customerdata.avarage_monthly_salary || 0,
      years_in_current_position:  this.customerdata.years_in_current_position || 0,
      income_rent:  this.customerdata.income_rent || 0,
      income_Government_Endorsement:  this.customerdata.income_Government_Endorsement || 0,
      income_other:  this.customerdata.income_other || 0,
      expenses_rent:  this.customerdata.expenses_rent || 0,
      expenses_loans:  this.customerdata.expenses_loans || 0,
      expenses_other:  this.customerdata.expenses_other || 0,
      property_city: this.customerdata.property_city || 'try',
      transaction_type:  this.customerdata.transaction_type || 0,
      estimated_price_by_customer:  this.customerdata.estimated_price_by_customer || 0,
      estimated_price_by_sales_agreement:  this.customerdata.estimated_price_by_sales_agreement || 0,
      has_other_properties:  this.customerdata.has_other_properties || true,
      amount_of_loan_requested:  this.customerdata.amount_of_loan_requested || 0,
      lastSynced:  this.customerdata.lastSynced || currentDate,
      isArchived: this.customerdata.isArchived || true,
      created_at:  this.customerdata.created_at || '2024-06-30T08:02:22.761',
      updated_at:  this.customerdata.updated_at || currentDate,
    };

    // Print or process formValues as needed
   
    console.log('Submitted Data:', formValues);
    // Optionally, you could send formValues to a server or perform additional actions here

    this.isEditMode = false; // Exit edit mode after submission

    const customervalue = sessionStorage.getItem('customerid');
    const customerId: number | null = customervalue !== null ? Number(customervalue) : null;

    if (customerId !== null) {
      this.customerService.update(customerId, formValues).subscribe(
        response => {
          console.log('Update successful:', response);
        },
        error => {
          console.error('Error updating data', error);
        }
      );
    } else {
      console.error('Invalid customer ID');
    }
  }
=======
export class CustomerDetailModalComponent {
  stepperLinear = true; 
  customer?:Customer;
  customerId=0;
personalInfoGroup:FormGroup;
jobInfoGroup:FormGroup;
financialInfoGroup:FormGroup;
>>>>>>> 1d9642c23d8cf451813b93b7eae866b85b6b76c1

  ngOnInit() {
    // בדוק אם הפרמטר קיים ולא null לפני ההשמה
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerId = +id;
      if(this.customerId!=-1)
      this.customer=this.customerService.getCustomerById(this.customerId);
      else if(this.customerId==-1)
        {
          this.customer=undefined;
        }
        if(this.customer)
          {
              this.personalInfoGroup.patchValue(this.customer);
              this.jobInfoGroup.patchValue(this.customer);
              this.financialInfoGroup.patchValue(this.customer);
          }
       } 
  else {
      // טיפול במקרה שבו מזהה הלקוח לא נמצא בנתיב (למשל, הצגת הודעת שגיאה או ניווט מחדש)
      console.error('Customer ID not found in route parameters.');
    }
  }

 
constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private customerService:customerService ) 
{ 
    // קבוצת שלב ראשון
  this.personalInfoGroup=this.formBuilder.group({
      last_Name: [this.customer?.last_Name, Validators.required],
      t_z: [this.customer?.t_z, Validators.required], 
      lastSynced:[this.customer?.lastSynced],
      isArchived :[''],
      created_at: [''],
      updated_at:[''],
      birthDate: [this.customer?.birthDate],
      family_status: ['', Validators.required],
      number_of_people_in_house: ['', Validators.required],
      address: ['', Validators.required],
    }),  
    // קבוצת שלב שני
   this.jobInfoGroup= this.formBuilder.group({
      job_Status: ['', Validators.required],
      work_business_name: [''],
      job_description: [''],
      avarage_monthly_salary: [''],
      years_in_current_position: ['']

    }),

    // קבוצת שלב שלישי
    this.financialInfoGroup=this.formBuilder.group({
      income_rent: [''],
      income_Government_Endorsement: [''],
      income_other: [''],
      expenses_rent: [''],
      expenses_loans: [''],
      expenses_other: [''],
      property_city: [''],
      transaction_type: ['', Validators.required],
      estimated_price_by_customer: [''],
      estimated_price_by_sales_agreement: [''],
      has_other_properties: [''],
      amount_of_loan_requested: ['']
    })
  }

     saveCustomer() {
        if (this.personalInfoGroup.valid||this.jobInfoGroup.valid||this.financialInfoGroup.valid) {
          const customerData :Customer= {
            id:this.customerId,
            lead_id:this.customer?.lead_id,
            last_Name: this.personalInfoGroup.value.last_Name,
            t_z: this.personalInfoGroup.value.t_z,
            birthDate: this.personalInfoGroup.value.birthDate,
            family_status :this.personalInfoGroup.value.family_status,
            number_of_people_in_house:this.personalInfoGroup.value.number_of_people_in_house,
            address:this.personalInfoGroup.value.address,
            job_status:this.jobInfoGroup.value.job_Status,
            work_business_name:this.jobInfoGroup.value.work_business_name,
            job_description:this.jobInfoGroup.value.job_description,
            // avarage_monthly_salary:this.jobInfoGroup.value.avarage_monthly_salary,
            years_in_current_position:this.jobInfoGroup.value.years_in_current_position,
            income_rent:this.financialInfoGroup.value.income_rent,
            income_Government_Endorsement:this.financialInfoGroup.value.income_Government_Endorsement,
            income_other:this.financialInfoGroup.value.income_other,
            expenses_rent:this.financialInfoGroup.value.expenses_rent,
            expenses_loans:this.financialInfoGroup.value.expenses_loans,
            expenses_other:this.financialInfoGroup.value.expenses_other,
            property_city:this.financialInfoGroup.value.property_city,
            transaction_type:this.financialInfoGroup.value.transaction_type,
            estimated_price_by_customer:this.financialInfoGroup.value.estimated_price_by_customer,
            estimated_price_by_sales_agreement:this.financialInfoGroup.value.estimated_price_by_sales_agreement,
            has_other_properties:this.financialInfoGroup.value.has_other_properties,
            amount_of_loan_requested:this.financialInfoGroup.value.amount_of_loan_requested,
            lastSynced:this.personalInfoGroup.value.lastSynced,
            isArchived :this.personalInfoGroup.value.isArchived ,
            created_at:this.personalInfoGroup.value.created_at,
            updated_at :this.personalInfoGroup.value.updated_at,
          };
      
           //checking if existing customer
           if (this.customerId!=-1) {
            // Update existing customer
            this.customerService.updateCustomer(this.customerId,customerData)
           .subscribe({
              next: () => {
                console.log('Customer UPDATE successfully');
              },
              error: error => {
                console.error('Error update customer:', error);
              }
            });
          }
       else {
          // Create new customer
          this.customerService.createCustomer(customerData)
        }
      }
    }   
    }