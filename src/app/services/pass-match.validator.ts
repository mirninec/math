// Проверка совпадения значений полей пароль и повторить пароль

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PassMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    let password = document.getElementById('registerPassword') as HTMLInputElement;

    if (!value) {
      return null;
    }
    return !(password.value === value) ? { passNoMatch: true } : null;
  };
}
