import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { leadService } from '../../services/lead.service';
import { leadService } from '../../Services/lead.service';
import { response } from 'express';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-magic-link',
  templateUrl: './magic-link.component.html',
  styleUrl: './magic-link.component.css',
  standalone: true,
  imports: [NgIf],
})
export class MagicLinkComponent implements OnInit {
  id: number | null = null;;
  token: string | null = null;
  isNotValid = false;
  constructor(private route: ActivatedRoute, private leadService: leadService, private router: Router) { }
  tokenValid: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id']; // Get the 'id' parameter
      this.token = params['token']; // Get the 'token' parameter if needed
      console.log('ID:', this.id);
      console.log('Token:', this.token);
    });
    if (this.id != null) {
      this.leadService.checkToken(this.id).subscribe(
        response => {
          if (response.status === 200) {
            this.router.navigate(['/lead-tetails/', this?.id]);
            console.log("hiiii");
          }
          else {
            this.isNotValid = true;
          }
        },
      );
    }



  }
}
