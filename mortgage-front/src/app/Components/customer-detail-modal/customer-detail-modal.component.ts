// import { Component, Input, OnInit } from '@angular/core';
// import { FormControl, FormGroup,Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '../../material/material.module';
// import { Customer, Family_Status } from '../../Models/Customer';
// import { customerService } from '../../services/costumer.service';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-customer-detail-modal',
//   standalone: true,
//   imports: [ReactiveFormsModule,MaterialModule],
//   templateUrl: './customer-detail-modal.component.html',
//   styleUrl: './customer-detail-modal.component.scss'
// })
// export class CustomerDetailModalComponent implements OnInit {
// 
//   public get selectedCustomer(): Customer| undefined {
//     return this._selectedCustomer;
//   }
//   constructor(private _customerService: customerService,private route: ActivatedRoute  ){
//   this.customerForm=new FormGroup({
//   "id":new FormControl(this._selectedCustomer?.id,),
//   "first_Name":new FormControl(this._selectedCustomer?.first_Name),
//   "last_Name":new FormControl(this._selectedCustomer?.last_Name),
//   "email":new FormControl(this._selectedCustomer?.email,),
//   "phone":new FormControl(this._selectedCustomer?.phone,),
//   "address":new FormControl(this._selectedCustomer?.address),
//   "lastSynced":new FormControl(this._selectedCustomer?.lastSynced),
//   "isArchived":new FormControl(this._selectedCustomer?.isArchived),
//   "created_at":new FormControl(this._selectedCustomer?.created_at),
//   "updated_at":new FormControl(this._selectedCustomer?.updated_at)
// });
// }

//   saveCustomer() {
//     if (this.customerForm.valid) {
//       const formData:Customer= this.customerForm.value;
//       console.log('Form Data:', formData); 
//        //checking if existing customer
//        if (this.customerId!=-1) {
//         // Update existing customer
//         this._customerService.updateCustomer(this.customerId,formData).subscribe({
//           next: () => {
//             console.log('Customer UPDATE successfully');
//           },
//           error: error => {
//             console.error('Error update customer:', error);
//           }
//         });
//       }
    
//    else {
//       // Create new customer
//       this._customerService.createCustomer(formData)
//     }
//   }
// }   
// }
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators ,FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { Customer } from '../../Models/Customer';
import { customerService } from '../../Services/costumer.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-detail-modal',
  standalone: true,
  imports: [ReactiveFormsModule,MaterialModule,CommonModule],
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss'
})
export class CustomerDetailModalComponent {
  stepperLinear = true; 
  customer?:Customer;
  customerId=0;
personalInfoGroup:FormGroup;
jobInfoGroup:FormGroup;
financialInfoGroup:FormGroup;

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
            job_Status:this.jobInfoGroup.value.job_Status,
            work_business_name:this.jobInfoGroup.value.work_business_name,
            job_description:this.jobInfoGroup.value.job_description,
            avarage_monthly_salary:this.jobInfoGroup.value.avarage_monthly_salary,
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