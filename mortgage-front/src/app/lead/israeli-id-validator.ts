import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
export function birthDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const inputDate = new Date(control.value);
    const today = new Date();
// If the incoming date is greater than today
    if (inputDate > today) {
      return { invalidBirthDate: true };
    }
    // Checking the year
    if (inputDate.getFullYear() > today.getFullYear()) {
      return { invalidBirthDate: true };
    }
    return null; // The date is correct
  };
}
