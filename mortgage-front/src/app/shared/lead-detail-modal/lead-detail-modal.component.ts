import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from '../Models/Lead';
import { ActivatedRoute, Router } from '@angular/router';
import { leadService } from '../Services/lead.service';
import { tap } from 'rxjs';


@Component({
  selector: 'lead-detail-modal',
  templateUrl: './lead-detail-modal.component.html',
})
export class LeadDetailComponent implements OnInit {
  leadForm: FormGroup;
  leadId?: number;
  lead?: Lead;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private leadService: leadService
  ) {
    this.leadForm = this.fb.group({
      first_Name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      created_at: [{ value: '', disabled: true }],
      updated_at: [{ value: '', disabled: true }],
      token: [{ value: '', disabled: true }],
      expiration: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.leadId = +params['id'];
      this.getLeadById(this.leadId);
    });
  }

  getLeadById(id: number): void {
    this.lead = this.leadService.getLeadById(id);
    if (this.lead)
      this.leadForm.patchValue(this.lead);
  }

  saveLead() {
    if (this.leadForm.valid) {
        const updatedLead: Lead = this.leadForm.value;
        updatedLead.id = this.lead?.id; // Ensure ID is set
        updatedLead.created_at = this.lead?.created_at;  // Preserve original date
        updatedLead.updated_at = this.lead?.updated_at;  // Preserve original dat
        updatedLead.expiration=this.lead?.expiration;
        updatedLead.token="";
        if (this.leadId == -1) {
          console.log('in new');
          this.leadService.addLead(updatedLead)
          .pipe(
            tap(response=>{
              console.log('Lead updated successfully', response);
              console.log("id:"+response?.id);
              
              this.router.navigate(['admin-dashboard/lead-list']);
            })
          )
          .subscribe();
        }
        else {
        this.leadService.updateLead(updatedLead)
          .pipe(
            tap(response => {
              this.router.navigate(['admin-dashboard/lead-list']); // Navigate back to the lead list or any other route
            })
          )
          .subscribe();
      }
    }
  }

  cancel(): void {
    this.router.navigate(['admin-dashboard/lead-list']);
  }
}
export class Leads {
  Id?: number;
  First_Name?: string;
  Phone?: string;
  Email?: string;
  created_at?: Date;
  updated_at?: Date;
}