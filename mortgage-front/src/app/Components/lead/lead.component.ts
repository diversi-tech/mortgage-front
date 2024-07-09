// lead.component.ts
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer, Family_Status, Job_Status, TransactionTypeEnum } from '../../Models/Customer';
import { customerService } from '../../Services/costumer.service';
import { MatStepper } from '@angular/material/stepper';
import { MaterialModule } from '../../material/material.module';

import { leadService } from '../../services/lead.service';
import { Role,User } from '../../Models/User';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit, AfterViewInit {

  @ViewChild('stepper')
  stepper!: MatStepper;


  user: User = {
    id: 0,
    userName: 'string',
    password: 'strings',
    email: 'st@gmail.com',
    role: 0,
    created_at: new Date('2024-07-04T09:16:24.555Z'),
    updated_at: new Date('2024-07-04T09:16:24.555Z')
  };

  // user:User={
  //     "id": 0,
  //     "userName": "string",
  //     "password": "string",
  //     "email": "string",
  //     "role": 0, 
  //     "created_at":new Date("2024-07-01T09:03:57.318Z"),
  //     "updated_at":new Date("2024-07-01T09:03:57.318Z")
  //   }
  // ;
  role: Role = 0;
  isLead: boolean = false
  lead_id: number = 5;
  customerId!: number | undefined
  password1!: string
  username1!: string
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  uploadedFiles: File[] = [];

  customerData: Customer = {
    "id": 0,
    "lead_id": 0,
    "last_Name": "string",
    "t_z": "string",
    "birthDate": new Date("2024-07-01T09:03:57.318Z"),
    "family_status": 0,
    "number_of_people_in_house": 14,
    "address": "string",
    "job_status": 0,
    "work_business_name": "string",
    "job_description": "string",
    // "avarage_monthly_salary": 0,
    "years_in_current_position": 0,
    "income_rent": 0,
    "income_Government_Endorsement": 0,
    "income_other": 0,
    "expenses_rent": 0,
    "expenses_loans": 0,
    "expenses_other": 0,
    "property_city": "string",
    "transaction_type": 0,
    "estimated_price_by_customer": 0,
    "estimated_price_by_sales_agreement": 0,
    "has_other_properties": true,
    "amount_of_loan_requested": 0,
    "lastSynced": new Date("2024-07-01T09:03:57.318Z"),
    "isArchived": true,
    "created_at": new Date("2024-07-01T09:03:57.318Z"),
    "updated_at": new Date("2024-07-01T09:03:57.318Z"),
    "email":"sjvfknv@vnckj",
    "phone": "05489546",
    "first_Name":"fhf"
  }

  constructor(private _formBuilder: FormBuilder, private customerService: customerService, private leadService: leadService, private userService: UserService) {

    this.firstFormGroup = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),

    })


    this.secondFormGroup = this._formBuilder.group({
      lastName: ['', [Validators.pattern('^[\u0590-\u05FF ]*$')]],
      t_z: ['', [Validators.pattern('^[0-9]{9}$')]],
      birthDate: [''],
      family_status: [''],
      number_of_people_in_house: ['', Validators.pattern('^[0-9]*$')],
      address: [''],
      job_Status: [''],
      work_business_name: [''],
      job_description: [''],
      avarage_monthly_salary: ['', Validators.pattern('^[0-9]*$')],
      years_in_current_position: ['', Validators.pattern('^[0-9]*$')],
      income_rent: ['', Validators.pattern('^[0-9]*$')],
      income_Government_Endorsement: ['', Validators.pattern('^[0-9]*$')],
      income_other: ['', Validators.pattern('^[0-9]*$')],
      expenses_rent: ['', Validators.pattern('^[0-9]*$')],
      expenses_loans: ['', Validators.pattern('^[0-9]*$')],
      expenses_other: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      property_city: [''],
      transaction_type: [''],
      estimated_price_by_customer: [''],
      estimated_price_by_sales_agreement: [''],
      has_other_properties: [''],
      amount_of_loan_requested: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({
      documents: ['']
    });
  }

  ngOnInit(): void {
    // Subscribe to value changes for password control
    this.firstFormGroup.get('password')?.valueChanges.subscribe(value => {
      this.checkPasswordLength();
      this.checkPasswordUppercase();
      this.checkPasswordDigit();
      this.checkPasswordSpecialCharacter();
    });
    this.loadFormData();
  }

  checkPasswordLength() {
    const passwordControl = this.firstFormGroup.get('password');
    if (passwordControl && passwordControl.value.length >= 8) {
      return true;
    } else {
      return false;
    }
  }

  checkPasswordUppercase() {
    const passwordControl = this.firstFormGroup.get('password');
    if (passwordControl && /[A-Z]/.test(passwordControl.value)) {
      return true;
    } else {
      return false;
    }
  }

  checkPasswordDigit() {
    const passwordControl = this.firstFormGroup.get('password');
    if (passwordControl && /\d/.test(passwordControl.value)) {
      return true;
    } else {
      return false;
    }
  }

  checkPasswordSpecialCharacter() {
    const passwordControl = this.firstFormGroup.get('password');
    if (passwordControl && /[!@#$%^&*(),.?":{}|<>]/.test(passwordControl.value)) {
      return true;
    } else {
      return false;
    }
  }

  ngAfterViewInit() {
    this.loadCurrentStep();
  }

  checkUserNameAndPassword() {

    //פה צריך לשלוח לבדיקה אם השם משתמש והסיסמא כבר קיימים בטבלת לקוחות ואם כן לשנות את השם או הסיסמא
    let lead = this.leadService.getLeadById(this.lead_id)
    let email = lead?.email;
    console.log("email", email);

    this.user.id = 0
    this.user.userName = this.firstFormGroup.value.userName
    this.user.password = this.firstFormGroup.value.password
    this.user.email = email
    this.user.role = this.role
    this.user.created_at = new Date(Date.now())
    this.user.updated_at = new Date(Date.now())
    console.log("user", this.user);
    if (this.user !== null && this.user !== undefined && this.user.password !== '' && this.user.userName !== '') {
      this.userService.createUser(this.user).subscribe({
        next: (res) => {
          console.log('User created not null', this.user)

          this.customerData.lead_id = this.lead_id
          this.customerService.createCustomer(this.customerData).subscribe({
            next: (res) => console.log('customer created not null', this.customerData),
            error: (error) => console.error('Error creating customer:', error)
          });
        },
        error: (error) => console.error('Error creating user:', error)
      });
    }

  }

  saveFormData() {
    const formData = {
      firstFormGroup: this.firstFormGroup.value,
      secondFormGroup: this.secondFormGroup.value,
      thirdFormGroup: this.thirdFormGroup.value,
      fourthFormGroup: this.fourthFormGroup.value,
      uploadedFiles: this.uploadedFiles
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  saveCurrentStep() {
    localStorage.setItem('currentStep', JSON.stringify(this.stepper.selectedIndex));
  }

  loadCurrentStep() {
    const currentStep = localStorage.getItem('currentStep');
    if (currentStep) {
      this.stepper.selectedIndex = JSON.parse(currentStep);
    }
  }


  onStepChange(event: any) {
    this.saveCurrentStep();  // שמירת השלב הנוכחי
  }

  loadFormData() {
    const formData = localStorage.getItem('formData');
    if (formData) {
      const parsedFormData = JSON.parse(formData);
      this.firstFormGroup.setValue(parsedFormData.firstFormGroup || {});
      this.secondFormGroup.setValue(parsedFormData.secondFormGroup || {});
      this.thirdFormGroup.setValue(parsedFormData.thirdFormGroup || {});
      this.fourthFormGroup.setValue(parsedFormData.fourthFormGroup || {});
      this.uploadedFiles = parsedFormData.uploadedFiles || [];
    }
  }

  onInputChange(fieldName: keyof Customer, event: any) {
    const fieldValue = event.target.value;
    this.customerData[fieldName] = fieldValue;
    this.saveFormData();  // שמירת הנתונים לאחר כל שינוי
  }

  onSelectionChange(fieldName: keyof Customer, event: any) {
    switch (event) {
      case Family_Status.Married:
      case Family_Status.Single:
      case Family_Status.Divorced:
      case Family_Status.Widow:
        this.customerData[fieldName] = event;
        break;
      default:
        // Handle invalid or unexpected values
        break;
    }
    this.saveFormData();  // שמירת הנתונים לאחר כל שינוי
  }

  onFileChange(event: any) {
    if (event.target.files) {
      for (let file of event.target.files) {
        this.uploadedFiles.push(file);
      }
      this.saveFormData();  // שמירת הנתונים לאחר כל שינוי
    }
  }

  uploadDocuments() {
    if (this.uploadedFiles.length) {
      // Logic to upload files
      console.log('Uploading files:', this.uploadedFiles);
    }
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
  }

  viewDocument(file: File) {
    const url = URL.createObjectURL(file);
    window.open(url);
  }

  onSubmit() {
    this.customerService.updateCustomer(this.customerId, this.customerData).subscribe({
      next: (response) => console.log('Customer created not null', this.customerData),
      error: (error) => console.error('Error creating customer:', error)
    });
  }
}