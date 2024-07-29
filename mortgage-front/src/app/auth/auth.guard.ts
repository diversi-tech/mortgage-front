import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { loginService } from '../shared/Services/login.service';

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const loginservice = inject(loginService);
  const router = inject(Router);
  if (loginservice.isLoggedIn()) {//check if loggedIn
    if (loginservice.isAdmin())//check if admin
      return true;
    // window.history.back()
    return false;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};

export const authGuard: CanActivateFn = (route, state) => {
  const loginservice = inject(loginService);
  const router = inject(Router);
  if (loginservice.isLoggedIn()) {//check if loggedIn
    return true;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};
