import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILead } from '../Models/Lead';
import { ActivatedRoute, Router } from '@angular/router';
import { leadService } from '../Services/lead.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'lead-detail-modal',
  styleUrl: './lead-detail-modal.component.css',
  templateUrl: './lead-detail-modal.component.html',
})
export class LeadDetailComponent implements OnInit {
  leadForm: FormGroup;
  leadId!: number;
  lead?: ILead;

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
    this.route.params.pipe(
      switchMap(params => {
        this.leadId = +params['id'];
        return this.leadService.getLeads(); // מחזיר את ה-BehaviorSubject כ-Observable
      })
    ).subscribe(leads => {
      this.lead = leads.find(lead => lead.id === this.leadId);
      if (this.lead) {
        this.leadForm.patchValue(this.lead);
      }
    });
  }

  saveLead() {
    if (this.leadForm.valid) {
      const updatedLead: ILead = { ...this.leadForm.value, id: this.lead!.id, token: "" };
      if (this.leadId === -1) {
        this.leadService.addLead(updatedLead).subscribe(response => {
          this.router.navigate(['admin/lead-list']);
        });
      } else {
        this.leadService.updateLead(updatedLead).subscribe(response => {
          this.router.navigate(['admin/lead-list']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['admin/lead-list']);
  }
}
