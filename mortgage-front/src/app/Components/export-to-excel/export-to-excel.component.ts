import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';  // ייבוא נכון של file-saver
import { customerService } from '../../Services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { ICustomer, Customer_type } from '../../Models/Customer';
@Component({
  selector: 'export-to-excel',
  standalone:true,
  imports: [MaterialModule],
  templateUrl: './export-to-excel.component.html',
  styleUrl: './export-to-excel.component.css'
})
export class ExportToExcelComponent {

  customers: ICustomer[] = [];
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
  @Input()
  typeOfCustomer?: number;
  fileName: string = "";

  ngOnInit(): void {
    this.customerService.fetchCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
        if (this.typeOfCustomer == 0)
          this.fileName = "רשימת_לידים"
        else if (this.typeOfCustomer == 1)
          this.fileName = "כל_הלקוחות"
        else if (this.typeOfCustomer == 2)
          this.fileName = "לקוחות_מהארכיון"
      },
      error: (error) => {
        console.error('Error fetching customers:', error);
      }
    });
  }

  exportToExcel(): void {
    // סינון הלקוחות לפי סוג הלקוח
    const filteredCustomers = this.customers.filter(customer => customer.customer_type == this.typeOfCustomer);
  
    // המרת הכותרות
    const translatedCustomers = filteredCustomers.map(customer => {
      const translatedCustomer: { [key: string]: any } = {};
      for (const key in customer) {
        if (this.headerMapping[key]) {
          translatedCustomer[this.headerMapping[key]] = customer[key];
        } else {
          translatedCustomer[key] = customer[key];
        }
      }
      return translatedCustomer;
    });
  
    // המרה ל-worksheet
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(translatedCustomers);
  
    // יצירת workbook
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
  
    // ייצוא ה-Excel
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    // שמירת הקובץ
    this.saveAsExcelFile(excelBuffer, 'data');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    // FileSaver.saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
    FileSaver.saveAs(data, `${this.fileName}${new Date().getTime()}.xlsx`);

  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
