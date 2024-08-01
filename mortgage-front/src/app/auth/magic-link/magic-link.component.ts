import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { leadService } from '../../shared/Services/lead.service';

@Component({
  selector: 'app-magic-link',
  templateUrl: './magic-link.component.html',
  styleUrl: './magic-link.component.css'
})
export class MagicLinkComponent implements OnInit {
  id: number | null = null;;
  token: string | null = null;
  isNotValid = false;
  constructor(private route: ActivatedRoute, private leadService: leadService, private router: Router) { 
  }
  tokenValid: any;
  ngOnInit(): void {
    console.log("in ngooninit of magic link");
    
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
            this.router.navigate(['lead', this?.id]);
            console.log("jiii");
            
            // this.router.navigate([`lead`]);
          }
          else {
            this.isNotValid = true;
          }
        },
        
    error => {
      console.error('Error checking token:', error);
      this.isNotValid = true; // הצגת הודעה למשתמש במקרה של שגיאה
    }
      );
    }
  }
}
