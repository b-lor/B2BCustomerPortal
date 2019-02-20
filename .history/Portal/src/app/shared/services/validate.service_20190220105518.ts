import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  constructor() {
  }

  validateName(name: string): boolean {
    const regexForName = /^[a-zA-Z ]{2,30}$/;
    return regexForName.test(String(name));
  }

  validateEmail(email: string): boolean {
    const regexForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexForEmail.test(String(email).toLowerCase());
  }

  validateUsername(username: string): boolean {
    const regexForUsername = /^[a-zA-Z0-9]+$/;
    return regexForUsername.test(String(username).toLowerCase());
  }

  validatePassword(password1: string, password2: string): boolean {
    if (password1 === password2) {
      return true;
    }
    return false;
  }

  validateContactNumber(contactNumber: string): boolean {
    const regexForContactNumber = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    return regexForContactNumber.test(contactNumber);
  }

  validateCreditCardNumber(cardNumber: string): boolean {
    const regexForCreditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    return regexForCreditCard.test(cardNumber);
  }
}
