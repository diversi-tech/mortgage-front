import { Component, Input } from '@angular/core';
import { customerService } from '../../shared/Services/costumer.service';
import { Customer } from '../../shared/Models/Customer';
import { ExportToExcelService } from '../../shared/Services/exportToExcelService';
@Component({
  selector: 'export-to-excel',
  templateUrl: './export-to-excel.component.html',
})
export class ExportToExcelComponent {

  customers: Customer[] = [];
  readonly headerMapping: { [key: string]: string } = {
    'id': 'מזהה',
    'lead_id': 'מזהה ליד',
    'last_Name': 'שם משפחה',
    'first_Name': 'שם פרטי',
    'email': 'אימייל',
    'phone': 'טלפון',
    'connection': 'חיבור',
    't_z': 'ת"ז',
    'birthDate': 'תאריך לידה',
    'family_status': 'מצב משפחתי',
    'number_of_people_in_house': 'מספר אנשים בבית',
    'address': 'כתובת',
    'job_status': 'מצב תעסוקתי',
    'customer_type': 'סוג לקוח',
    'work_business_name': 'שם העסק/מקום עבודה',
    'job_description': 'תיאור עבודה',
    'avarage_monthly_salary': 'שכר חודשי ממוצע',
    'years_in_current_position': 'שנים בתפקיד נוכחי',
    'income_rent': 'הכנסה משכירות',
    'income_Government_Endorsement': 'הכנסה מתמיכה ממשלתית',
    'income_other': 'הכנסה אחרת',
    'expenses_rent': 'הוצאות שכירות',
    'expenses_loans': 'הוצאות הלוואות',
    'expenses_other': 'הוצאות אחרות',
    'property_city': 'עיר הנכס',
    'transaction_type': 'סוג עסקה',
    'estimated_price_by_customer': 'מחיר מוערך על ידי הלקוח',
    'estimated_price_by_sales_agreement': 'מחיר מוערך לפי הסכם מכר',
    'has_other_properties': 'יש נכסים נוספים',
    'amount_of_loan_requested': 'סכום ההלוואה המבוקש',
    'lastSynced': 'סונכרן לאחרונה',
    'isArchived': 'האם בארכיון',
    'created_at': 'נוצר בתאריך',
    'updated_at': 'עודכן בתאריך',
  };
  constructor(private customerService: customerService, private exportToExcel: ExportToExcelService) { }
  @Input()
  typeOfCustomer?: number;
  fileName: string = "";
  filteredCustomers: Customer[] = [];
  ngOnInit(): void {
    this.customerService.fetchCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
        if (this.typeOfCustomer == 0)
          this.fileName = "רשימת_לידים"
        else if (this.typeOfCustomer == 1)
          this.fileName = "כל_הלקוחות"
        else if (this.typeOfCustomer == 2)
          this.fileName = "לקוחות_מהארכיון";
        this.filteredCustomers = this.customers.filter(customer => customer.customer_type == this.typeOfCustomer);

      },
      error: (error) => {
        console.error('Error fetching customers:', error);
      }
    });
  }
  export() {
    if (this.filteredCustomers != undefined)
      this.exportToExcel.exportToExcel(this.filteredCustomers, this.fileName, this.headerMapping);
    else
      console.log('is null');

  }
}