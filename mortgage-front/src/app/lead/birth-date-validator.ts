import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
// Checking an Israeli ID card
export function israeliIdValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const id = control.value;
    if (!id) {
      return null;
    }
 // Check that the identity card consists of 9 digits
    if (!/^\d{9}$/.test(id)) {
      return { invalidIsraeliId: true };
    }
 // Proximity calculation check
    const sum = Array.from(id, Number)
      .reduce((counter, digit, index) => {
        const step = digit * ((index % 2) + 1);
        return counter + (step > 9 ? step - 9 : step);
      }, 0);
    if (sum % 10 !== 0) {
      return { invalidIsraeliId: true };
    }
    return null; // The identity card is valid
  };
}