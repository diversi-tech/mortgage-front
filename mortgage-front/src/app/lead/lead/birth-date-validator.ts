import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// בדיקת תעודת זהות ישראלית
export function israeliIdValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const id = control.value;
    if (!id) {
      return null; // שדה ריק
    }
    // בדיקה שהתעודה הזהות מורכבת מ-9 ספרות
    if (!/^\d{9}$/.test(id)) {
      return { invalidIsraeliId: true };
    }
    // בדיקת חישוב בקריבות
    const sum = Array.from(id, Number)
      .reduce((counter, digit, index) => {
        const step = digit * ((index % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }, 0);
    if (sum % 10 !== 0) {
      return { invalidIsraeliId: true };
    }
    return null; // התעודה הזהות תקינה
  };
}