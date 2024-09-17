import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { leadService } from '../../shared/Services/lead.service';
import { UserService } from '../../shared/Services/user.service';
import { birthDateValidator } from './birth-date-validator';
import { israeliIdValidator } from './israeli-id-validator';
import { DocumentTypeService } from '../../shared/Services/documentType.service';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { Observable, Subject } from 'rxjs';
import { IDocument } from '../../shared/Models/document';
import { customerService } from '../../shared/Services/costumer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { loginService } from '../../shared/Services/login.service';
import { IUser, Role } from '../../shared/Models/user';
import { ICustomer, Connection, Family_Status, Job_Status, TransactionTypeEnum, Customer_Type } from '../../shared/Models/Customer';
import { IDocumentType } from '../../shared/Models/DocumentTypes.Model';
import { DocumentsListCustomerComponent } from '../../customer/documents-list-customer/documents-list-customer.component';
import { read } from 'node:fs';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit, AfterViewInit {
  //תהילה ויעל
  @ViewChild(DocumentsListCustomerComponent) documentsListCustomer: DocumentsListCustomerComponent | undefined;

  @ViewChild('stepper') stepper!: MatStepper;

  user: IUser = {
    id: 0,
    userName: '',
    password: '',
    email: '',
    role: Role.Customer,
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now())
  };

  currentStepIndex: number = 0;
  isCustomer = false;
  enterOrNot !: boolean;
  isLead: boolean = false;
  isLinear = true;
  isAddDocuments = false;
  res = "";
  lead_id: number | null = null;
  customerId!: number | undefined;
  userId!: number | undefined;
  password1!: string;
  username1!: string;
  isDocsAdded = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  uploadedFiles: File[] = [];
  selectedTransactionType: TransactionTypeEnum | undefined;
  showTable: boolean = false;
  tableData: IDocumentType[] = [];

  // documentUpdates = new Subject<void>();

  document: IDocument = {
    id: 0,
    customer_Id: 0,
    task_description: "",
    document_type_id: 0,
    document_path: "",
    document_path2: "",
    status: 0,
    status2: 0,
    due_date: new Date(Date.now()),
    created_at: new Date(Date.now()),
    id2: 0,
    updated_at: new Date(Date.now()),
  };

  customerData: ICustomer = {
    id: 0,
    lead_id: this.lead_id!,
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
    customer_type: 0,
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
    updated_at: new Date(Date.now()),
    userId: 0
  };
  familyStatusOptions = [
    { value: Family_Status.Single, label: 'רווק' },
    { value: Family_Status.Married, label: 'נשוי' },
    { value: Family_Status.Divorced, label: 'גרוש' },
    { value: Family_Status.Widowed, label: 'אלמן' }
  ];
  jobStatusOptions = [
    { value: Job_Status.Employed, label: 'שכיר' },
    { value: Job_Status.SelfEmployed, label: 'עצמאי' }
  ];
  transactiontypeOptions = [
    { value: TransactionTypeEnum.מחיר_למשתכן, label: 'מחיר למשתכן' },
    { value: TransactionTypeEnum.New, label: 'יד ראשונה' },
    { value: TransactionTypeEnum.Old, label: 'יד שניה' },
    { value: TransactionTypeEnum.Renovation, label: 'שיפוצים' },
    { value: TransactionTypeEnum.Other, label: 'לכל מטרה' }
  ];
  connectionOptions = [
    { value: Connection.whatup, label: 'וואצאפ' },
    { value: Connection.email, label: 'מייל' },
  ];
  hasOtherProperties = [
    { value: true, label: 'כן' },
    { value: false, label: 'לא' },
  ];
  passwordStrength: { valid: string[], invalid: string[] } = { valid: [], invalid: [] };
  displayDocuments: boolean = false;
  hidePassword = true;  // משתנה לשליטה על הצגת הסיסמה

  constructor(
    private loginservice: loginService,
    private route: ActivatedRoute,
    private router: Router,
    private _formBuilder: FormBuilder,
    private customerService: customerService,
    private leadService: leadService,
    private userService: UserService,
    private documentType: DocumentTypeService,
    private customerTasks: DocumentsListCustomerService) {
    this.firstFormGroup = new FormGroup({
      userName: new FormControl({ value: 'הכנס מייל', disabled: false }, [
        Validators.required, Validators.email]),
      password: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.minLength(10),
        this.passwordStrengthValidator
      ])
    })


    // Form group for personal information
    this.secondFormGroup = this._formBuilder.group({
      last_Name: ['', [Validators.pattern('^[a-zA-Zא-ת ]*$'), Validators.required]],
      first_Name: [''],
      email: [''],
      phone: [''],
      connection: [''],
      t_z: ['', [Validators.required, israeliIdValidator()]],
      birthDate: ['', [Validators.required, birthDateValidator()]],
      family_status: ['', Validators.required],
      number_of_people_in_house: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      address: ['', Validators.required],
      job_status: [''],
      customer_type: [''],
      work_business_name: ['', Validators.required],
      job_description: ['', Validators.required],
      avarage_monthly_salary: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      years_in_current_position: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      income_rent: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      income_Government_Endorsement: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      income_other: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      expenses_rent: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      expenses_loans: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      expenses_other: ['', Validators.required]
    });

    // Form group for property information
    this.thirdFormGroup = this._formBuilder.group({
      property_city: ['', Validators.required],
      transaction_type: ['', Validators.required],
      estimated_price_by_customer: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      estimated_price_by_sales_agreement: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      has_other_properties: ['', Validators.required],
      amount_of_loan_requested: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      userId: ['']
    });

    // Form group for document uploads
    this.fourthFormGroup = this._formBuilder.group({
      documents: ['', Validators.required]
    });
  }


  // Custom validator for password strength
  passwordStrengthValidator = (control: FormControl): { [key: string]: boolean } | null => {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

    this.passwordStrength.valid = [];
    this.passwordStrength.invalid = [];

    if (value && value.length >= 10) this.passwordStrength.valid.push('אורך 10 תווים לפחות');
    else this.passwordStrength.invalid.push('אורך 10 תווים לפחות');

    if (hasUpperCase) this.passwordStrength.valid.push('אות גדולה');
    else this.passwordStrength.invalid.push('אות גדולה');

    if (hasLowerCase) this.passwordStrength.valid.push('אות קטנה');
    else this.passwordStrength.invalid.push('אות קטנה');

    if (hasNumeric) this.passwordStrength.valid.push('מספר');
    else this.passwordStrength.invalid.push('מספר');

    if (hasSpecialChar) this.passwordStrength.valid.push('תו מיוחד');
    else this.passwordStrength.invalid.push('תו מיוחד');

    if (this.passwordStrength.invalid.length === 0) {
      return null;
    }
    return { passwordStrength: true };
  }


  // // מאזין לאירוע היציאה מהדפדפן
  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event: Event) {
  //   this.saveFormData();
  // }


  // Lifecycle hook that is called after data-bound properties are initialized
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lead_id = Number(params.get('id'));
      console.log("in ng oninit id=", this.lead_id);
      sessionStorage.setItem('lead_id', this.lead_id + "");
    })

    if (localStorage.getItem('enterOrNot') === null) {
      localStorage.setItem('enterOrNot', 'false');
    }

    const storedUserName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('password');

    if (storedUserName !== null && storedPassword !== null) {
      this.firstFormGroup.setValue({
        userName: JSON.parse(storedUserName),
        password: JSON.parse(storedPassword)
      });
      this.firstFormGroup.get('userName')?.disable();
      this.firstFormGroup.get('password')?.disable();
    }

    // שןלפת מהלוקשל ומכניסה ידנית
    this.customerId = +localStorage.getItem('customerId')!;
    this.lead_id = +localStorage.getItem('lead_id')!;
    this.userId = +localStorage.getItem('userId')!;
    this.customerData.id = this.customerId;
    this.customerData.lead_id = this.lead_id;
    this.customerData.userId = this.userId;

    const storedStep = localStorage.getItem('currentStep');
    if (storedStep !== null) {
      this.currentStepIndex = parseInt(storedStep, 10);
    }
    const tableDataString = localStorage.getItem('tableData');
    if (tableDataString) {
      this.tableData = JSON.parse(tableDataString);
    }
    this.loadFormData();

  }

  // Updates the current step in the stepper component
  onStepChange(event: any) {
    this.currentStepIndex = event.selectedIndex;
    localStorage.setItem('currentStep', this.currentStepIndex.toString());
  }
  // Lifecycle hook that is called after the component's view has been fully initialized
  ngAfterViewInit() {
    this.loadCurrentStep();
  }
  // Checks if the user is returning by checking local storage
  isReturningUser(): boolean {
    return localStorage.getItem('enterOrNot') === 'true';
  }

  //Checks if the email or password is taken,
  // if so, pops up a message that the email and password need to be changed.
  // If not taken, creates a new user and a new customer.
  // If the user has left and returned, he will not have to enter details again.
  checkUserNameAndPassword() {
    console.log("id========" + this.lead_id);
    this.lead_id = +sessionStorage.getItem('lead_id')!;
    this.leadService.getLeadById(this.lead_id!).subscribe((lead) => {
      if (lead) {

        this.customerData.phone = lead.phone;
        this.customerData.email = lead.email;
        this.customerData.first_Name = lead.first_Name;
        // localStorage.setItem('formData', JSON.stringify(this.customerData));
        //דחפתי לטופס עצמו כדי שישמור שדות שאין להם ויזואליות
        this.secondFormGroup.value.phone = this.customerData.phone;
        this.secondFormGroup.value.email = this.customerData.email;
        this.secondFormGroup.value.first_Name = this.customerData.first_Name;
        console.log("פרטי הלקוח התעדכנו בפרטי הליד");
      }
    });

    if (localStorage.getItem('enterOrNot') == 'true') {
      this.stepper.next();
      return;
    }
    this.user.id = 0;
    this.user.userName = this.firstFormGroup.value.userName;
    this.user.password = this.firstFormGroup.value.password;
    this.user.email = this.firstFormGroup.value.userName;
    this.user.role = Role.Customer;
    this.user.created_at = new Date(Date.now())
    this.user.updated_at = new Date(Date.now())

    this.userService.IsExist(this.user).subscribe(
      (response: string) => {
        localStorage.setItem('userName', JSON.stringify(this.user.userName));
        localStorage.setItem('password', JSON.stringify(this.user.password));
        this.res = response;
        if (response === '200') {
          let i = localStorage.getItem('enterOrNot');
          if (i === "true") {
            this.stepper.next();
          }
          else {
            alert("איימיל או סיסמא תפוסים נא להכניס אחר");
          }
        } else if (response === '404' && this.user !== null && this.user !== undefined && this.user.password !== '' && this.user.userName !== '') {
          localStorage.setItem('enterOrNot', 'true')
          this.stepper.next()
          this.userService.createUserForLead(this.user, this.lead_id!).subscribe({
            next: (createdUser: IUser) => {
              console.log('User created:', this.user);
              this.customerData.lead_id = this.lead_id!;
              this.customerData.userId = createdUser.id;
              // this.customerData.userId = this.user.id;
              console.log("customerData=====", this.customerData.id);
              //כנ"ל 
              // this.secondFormGroup.value.lead_id = this.lead_id;
              this.secondFormGroup.value.userId = createdUser.id;

              this.customerService.createCustomerForLead(this.customerData, this.lead_id!).subscribe({
                next: (res: ICustomer) => {
                  this.customerId = res.id
                  localStorage.setItem('customerId', this.customerId + "")
                  localStorage.setItem('lead_id', this.lead_id + "")
                  localStorage.setItem('userId', this.userId + "")
                  this.customerData.customer_type = Customer_Type.c
                  // this.customerData.userId = this.user.id
                  this.customerData.id = res.id;
                  //כנ"ל
                  this.secondFormGroup.value.customer_type = Customer_Type.c;
                  console.log('Customer created:', this.customerData)
                  this.loginservice.login(this.user.email!, this.user.password!).subscribe(
                    (response: any) => {
                      let parsedResponse = JSON.parse(response);
                      sessionStorage.setItem("token", parsedResponse.token);
                      console.log("customerid=", this.loginservice.GetCurrentUser().customerId);
                    },
                    (error: any) => {
                      console.log('Login failed', error);
                    }
                  );
                },
                error: (error: any) => console.error('Error creating customer:', error)
              });
            },
            error: (error: any) => console.error('Error creating user:', error)
          });
        } else {
          console.error('Unexpected response:', response);
        }
      },
      (error: any) => {
        console.error('Error during user existence check:', error);
      }
    );
  }


  // Saves form data to local storage
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
  // Saves the current step index to local storage
  saveCurrentStep() {
    localStorage.setItem('currentStep', JSON.stringify(this.stepper.selectedIndex));
  }
  // Loads the current step index from local storage
  loadCurrentStep() {
    const currentStep = localStorage.getItem('currentStep');
    if (currentStep) {
      this.stepper.selectedIndex = JSON.parse(currentStep);
    }
  }
  // Loads form data from local storage
  loadFormData() {
    const formData = localStorage.getItem('formData');
    if (formData) {
      const data = JSON.parse(formData);
      console.log("data", data);
      this.firstFormGroup.patchValue(data.firstFormGroup);
      this.secondFormGroup.patchValue(data.secondFormGroup);
      this.thirdFormGroup.patchValue(data.thirdFormGroup);
      this.fourthFormGroup.patchValue(data.fourthFormGroup);
      this.uploadedFiles = data.uploadedFiles || [];


      this.customerData.last_Name = this.secondFormGroup.value.last_Name;
      this.customerData.first_Name = this.secondFormGroup.value.first_Name;
      this.customerData.email = this.secondFormGroup.value.email;
      this.customerData.phone = this.secondFormGroup.value.phone;
      this.customerData.connection = this.secondFormGroup.value.connection.toISOString;
      this.customerData.t_z = this.secondFormGroup.value.t_z;
      this.customerData.birthDate = this.secondFormGroup.value.birthDate
      this.customerData.family_status = this.secondFormGroup.value.family_status.toISOString;
      this.customerData.number_of_people_in_house = this.secondFormGroup.value.number_of_people_in_house.toISOString;
      this.customerData.address = this.secondFormGroup.value.address;
      this.customerData.job_status = this.secondFormGroup.value.job_status.toISOString
      this.customerData.customer_type = this.secondFormGroup.value.customer_type.toISOString
      this.customerData.work_business_name = this.secondFormGroup.value.work_business_name;
      this.customerData.job_description = this.secondFormGroup.value.job_description;
      this.customerData.avarage_monthly_salary = this.secondFormGroup.value.avarage_monthly_salary.toISOString;
      this.customerData.years_in_current_position = this.secondFormGroup.value.years_in_current_position.toISOString;
      this.customerData.income_rent = this.secondFormGroup.value.income_rent.toISOString;
      this.customerData.income_Government_Endorsement = this.secondFormGroup.value.income_Government_Endorsement.toISOString;
      this.customerData.income_other = this.secondFormGroup.value.income_other.toISOString;
      this.customerData.expenses_rent = this.secondFormGroup.value.expenses_rent
      this.customerData.expenses_loans = this.secondFormGroup.value.expenses_loans
      this.customerData.expenses_other = this.secondFormGroup.value.expenses_other
      this.customerData.property_city = this.thirdFormGroup.value.property_city;
      this.customerData.transaction_type = this.thirdFormGroup.value.transaction_type;
      this.customerData.estimated_price_by_customer = this.thirdFormGroup.value.estimated_price_by_customer.toISOString;
      this.customerData.estimated_price_by_sales_agreement = this.thirdFormGroup.value.estimated_price_by_sales_agreement.toISOString;
      this.customerData.has_other_properties = this.thirdFormGroup.value.has_other_properties.toISOString
      this.customerData.amount_of_loan_requested = this.thirdFormGroup.value.amount_of_loan_requested.toISOString;
      this.customerData.isArchived = this.thirdFormGroup.value.isArchived;
      this.customerData.userId = this.thirdFormGroup.value.userId;
    }
    console.log("customerData", this.customerData);

    const savedData = localStorage.getItem('customerData');
  }
  // Updates a field in customerData when the user changes an input value
  onInputChange(fieldName: keyof ICustomer, event: any) {
    const fieldValue = event.target.value;
    this.customerData[fieldName] = fieldValue;
    this.saveFormData();
  }
  // Updates a field in customerData when the user changes a selection value
  onSelectionChange(fieldName: keyof ICustomer, value: any) {
    if (fieldName == 'family_status') {
      this.customerData[fieldName] = value as Family_Status;
      this.customerData.family_status = Number(this.customerData.family_status);
    }
    else if (fieldName == 'job_status') {
      this.customerData[fieldName] = value as Job_Status;
      this.customerData.job_status = Number(this.customerData.job_status);
    }
    else if (fieldName == 'transaction_type') {
      this.customerData[fieldName] = value as TransactionTypeEnum;
      this.customerData.transaction_type = Number(this.customerData.transaction_type);
    }
    else if (fieldName == 'has_other_properties') {
      this.customerData[fieldName] = value as boolean;
      this.customerData.has_other_properties = this.customerData.has_other_properties;
      if (value === true)
        this.customerData[fieldName] = true;
      else
        this.customerData[fieldName] = false;
    }
    else if (fieldName == 'connection') {
      this.customerData[fieldName] = value as Connection;
      this.customerData.connection = Number(this.customerData.connection);
    }
    else {
      this.customerData[fieldName] = value;
    }
    this.saveFormData();
  }
  // Saves the current table data to local storage
  saveSelectionType(value: any) {
    localStorage.setItem('tableData', JSON.stringify(this.tableData));
  }

  // Saves customer data and handles the process for step 3
  save() {
    console.log('in save line 527');

    try {
      console.log('in try line 530');
      
      this.customerService.updateCustomer(this.customerId, this.customerData).subscribe({
        next:(res) => {
          // if (localStorage.getItem('isAddDocuments') !== 'true') {
          this.getDocsByTransactionTypeAndAddTasks();
          console.log("The response from update customer =", res);
          this.removeStorage();
          this.router.navigate(['auth/login']);
          // }
        },
        error:(err)=>{
          console.log("Error in update");
          // this.router.navigate(['auth/login']);
        }
    });
    } catch (error) {
      console.error('Error in the process', error);
    }
  }
  saveSecondStep() {
    // try {
    //   this.customerData.customer_type = Customer_Type.l;
    //   this.customerService.updateCustomer(this.customerId, this.customerData).subscribe(
    //     () => {
    //       console.log('saved second step');

    //     });
    // } catch (error) {
    //   console.error('Error in the process', error);
    // }
    try {
      this.customerData.customer_type = Customer_Type.l;
      this.customerService.createCustomerForLead(this.customerData, this.customerId!).subscribe(
        (res) => {
          console.log('saved second step');
          console.log('נוצר לקוח res=', res);


        });
    } catch (error) {
      console.error('Error in the process', error);
    }
    //להעתיק את זה ולהשתמש בפונקציה שיוצרת לקוח- ולא מעדכנת וללראות שזה עובר הרשאות!!
  }
  // Saves the current state of documents and clears local storage
  removeStorage() {
    console.log("step 4 created");
    localStorage.removeItem('enterOrNot');
    localStorage.removeItem('formData');
    localStorage.removeItem('currentStep');
    localStorage.removeItem('ifEnter');
    localStorage.removeItem('currentStepIndex');
    localStorage.removeItem('tableData');
    localStorage.removeItem('isAddDocuments');
    localStorage.removeItem('customerId');
    localStorage.removeItem('lead_id');
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // location.reload();
    this.router.navigate(['auth/login']);
  }

  getDocsByTransactionTypeAndAddTasks(): void {
    let num = Number(this.customerData.transaction_type);
    console.log("in getDocsByTransactionTypeAndAddTasks num=", num);

    this.documentType.getDocsByTransactionType(num).subscribe(
      (res) => {
        this.tableData = res;
        localStorage.setItem('tableData', JSON.stringify(this.tableData));
        console.log("in getDocsByTransactionTypeAndAddTasks, res=", res);

        this.addToCustomerTask();
        // this.documentUpdates.next();
        this.stepper.next();
      },
      (error: any) => {
        console.error('Error fetching documents:', error);

      }
    );

  }


  //  // Returning all appropriate documents by type of transaction
  //   async getDocuments(): Promise<IDocumentType[]> {
  //     let num = Number(this.customerData.transaction_type);
  //     return new Promise((resolve, reject) => {
  //       this.documentType.getDocsByTransactionType(num).subscribe({
  //         next: (res: IDocumentType[]) => {
  //           this.tableData = res;
  //           console.log("tableData", this.tableData);
  //           localStorage.setItem('tableData', JSON.stringify(this.tableData));
  //           resolve(this.tableData);
  //         },
  //         error: (error: any) => {
  //           console.error('Error fetching documents:', error);
  //           reject(error);
  //         }
  //       });
  //     });
  //   }

  async addToCustomerTask(): Promise<any> {
    const documents: IDocument[] = this.tableData.map((item: any) => ({
      id: 0,
      id2: 0,
      customer_Id: this.customerData.id!,
      task_description: item.document_Name,
      document_type_id: Number(this.customerData.transaction_type),
      document_path: "",
      document_path2: "",
      status: 0,
      status2: 0,
      due_date: new Date(Date.now()),
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now())
    }));

    this.customerTasks.addDocuments(documents).subscribe({
      next: (res) => {
        console.log("Successfully added documents to customerTask");
        this.isDocsAdded = true;
        this.displayDocuments = true;

        localStorage.setItem('isAddDocuments', 'true');
      },
      error: (error) => {
        console.log("Failed to add documents to CustomerTask");
      }
    });
  }
}