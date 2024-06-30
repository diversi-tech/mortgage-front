import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../Models/Customer';
import { customerService } from '../../services/costumer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail-modal',
  standalone: true,
  imports: [],
  templateUrl: './customer-detail-modal.component.html',
  styleUrl: './customer-detail-modal.component.scss'
})
export class CustomerDetailModalComponent implements OnInit {
  customerId=0;
  customer?:Customer;
  constructor(private route: ActivatedRoute,private customerService:customerService) {  }
  ngOnInit() {
    // בדוק אם הפרמטר קיים ולא null לפני ההשמה
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerId = +id;
      this.customer=this.customerService.getCustomerById(this.customerId);
    } else {
      // טיפול במקרה שבו מזהה הלקוח לא נמצא בנתיב (למשל, הצגת הודעת שגיאה או ניווט מחדש)
      console.error('Customer ID not found in route parameters.');
    }
  }
  
}