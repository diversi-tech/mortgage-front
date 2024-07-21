import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DocumentType, TransactionType } from '../../Models/DocumentTypes.Model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailingListService } from '../../Services/mailing-list.service';
import { customerService } from '../../Services/costumer.service';


@Component({
  selector: 'mailing-list',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mailing-list.component.html',
  styleUrl: './mailing-list.component.css'
})


export class MailingListComponent {
  mailingListForm: FormGroup;
  transactionTypes = Object.values(TransactionType).filter(key => isNaN(Number(key)));
  docType!: DocumentType

  constructor(private fb: FormBuilder, private customerService: customerService, private snackBar: MatSnackBar,private mailingListService:MailingListService) {
    this.mailingListForm = this.fb.group({
      subject: [''],
      message: ['']
    });
  }


 async onSubmit() {
    if (this.isFormValid()) {
      const recipients: string[] = await this.fetchCustomerEmails();
      const formValues = this.mailingListForm.value;
      this.sendMail(recipients, formValues.subject, formValues.message);
    }
  }

  async fetchCustomerEmails(): Promise<string[]> {
    try {
      const customers = await this.customerService.fetchCustomers().toPromise();
      return customers?.filter(customer => customer.customer_type === 1 && customer.email !== undefined)//getting the permanent customers
      .map(customer => customer.email) as string[];    }
    catch (error) {
      console.error('Error fetching customers:', error);
      return [];
    }
  }

  sendMail(recipients: string[], subject: string, body: string) {
    this.mailingListService.sendMailingList(recipients, subject, body)
      .subscribe(
        (event: any) => {
            console.log('Message was sent successfully:');
            this.snackBar.open('ההודעה נשלחה בהצלחה!!', 'Close', {
            });
        },
        (error: any) => {
          this.snackBar.open('ארעה שגיאה בעת שליחת ההודעה!!', 'Close', {
          });          
          console.error('Send error:', error);
        }
     );
      this.clearFormFields();
  }

  isFormValid(): boolean {
    const subjectControl = this.mailingListForm.get('subject');
    const messageControl = this.mailingListForm.get('message');
    return subjectControl?.value || messageControl?.value;
  }

  clearFormFields(): void { 
    this.mailingListForm.reset({
    });
  }
}