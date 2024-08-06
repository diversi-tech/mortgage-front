import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
export function birthDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputDate = new Date(control.value);
    const today = new Date();
    // אם התאריך הנכנס גדול מהיום
    if (inputDate > today) {
      return { invalidBirthDate: true };
    }
    // בדיקת השנה
    if (inputDate.getFullYear() > today.getFullYear()) {
      return { invalidBirthDate: true };
    }
    return null; // התאריך תקין
  };
}