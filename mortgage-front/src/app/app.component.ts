import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiStateService } from './shared/Services/uiState.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private uiStateService: UiStateService,
    private _snackBar: MatSnackBar,
    private router: Router) {}
    private timeoutDuration = 20 * 60 * 1000; // 30 דקות
    private alertDuration = 60 * 1000; // 60 שניות
    private lastActivityTime: number = 0;
    private timeoutId: any;
    private intervalId: any;
  
    ngOnInit() {
      if (typeof window !== 'undefined') {
        this.resetTimer();
        window.addEventListener('mousemove', () => this.resetTimer());
        window.addEventListener('click', () => this.resetTimer());
        window.addEventListener('keypress', () => this.resetTimer());
      }
    }
    ngOnDestroy() {
      clearTimeout(this.timeoutId);
      clearInterval(this.intervalId);
    }
  
    private resetTimer() {
      this.lastActivityTime = Date.now();
      clearTimeout(this.timeoutId);
      clearInterval(this.intervalId);
      this.updateTimerDisplay();
      this.timeoutId = setTimeout(() => this.logout(), this.timeoutDuration);
    }

    private logout() {
      alert('זמן התוקף פג בגלל חוסר פעילות.');
      if(typeof window && window.sessionStorage!=undefined)
        sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  
    private updateTimerDisplay() {
      this.intervalId = setInterval(() => {
        const timeElapsed = Date.now() - this.lastActivityTime;
        const timeLeft = this.timeoutDuration - timeElapsed;
  
        if (timeLeft <= 0) {
          clearInterval(this.intervalId);
          this.logout();
        } else if (timeLeft <= this.alertDuration) {
          this.showAlert();
          
        }
      }, 1000);
    }
    
  private showAlert() {
    this.openSnackBar( 'אם לא תמשיך בגלישה בדקה הקרובה, תוצא מהמערכת ותאלץ להכנס מחדש','בטל');
    clearInterval(this.intervalId);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      direction:'rtl',
      panelClass: ['custom-snackbar']
    });
  }

  get showGeneral(): boolean {
    return this.uiStateService.showGeneral;
  }

  title = 'mortgage-client';

}





