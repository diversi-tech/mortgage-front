import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';  // ייבוא נכון של file-saver
import { customerService } from '../../shared/Services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { Customer } from '../../shared/Models/Customer';

@Component({
  selector: 'customer-excel',
  templateUrl: './customer-excel.component.html',
  styleUrl: './customer-excel.component.css'
})
export class CustomerExcelComponent {
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
  
  constructor(private customerService: customerService) { }

  @Input() customerId?: number |null |undefined = undefined;
   
  
  customer: Customer|any;
  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  ngOnInit(): void {
    this.customerService.getById(Number(this.customerId)).subscribe({
      next: (response) => {
        console.log('Customer come successfully:', response.birthDate);
        this.customer={...response};
      },
      error: (error) => {
        console.error('Error creating customer:', error);
      }
    });
  }
  exportToExcel(): void {
    // Translate the single customer object
    const translatedCustomer: { [key: string]: any } = {};
    for (const key in this.customer) {
        if (this.headerMapping[key]) {
            translatedCustomer[this.headerMapping[key]] = this.customer[key];
        } else {
            translatedCustomer[key] = this.customer[key];
        }
    }

    // Convert the single object to an array
    const customerArray = [translatedCustomer];

    // Convert the array to a worksheet
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(customerArray);

    // Create a workbook
    const workbook: XLSX.WorkBook = {
        Sheets: { 'data': worksheet },
        SheetNames: ['data']
    };

    // Write the Excel file
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Save the file
    this.saveAsExcelFile(excelBuffer, 'data');
}



  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    // FileSaver.saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
    FileSaver.saveAs(data, `${this.customerId}לקוח${new Date().getTime()}.xlsx`);

  }
}
