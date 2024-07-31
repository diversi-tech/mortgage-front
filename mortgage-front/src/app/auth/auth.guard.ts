import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { loginService } from '../shared/Services/login.service';

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const loginservice = inject(loginService);
  const router = inject(Router);
  if (loginservice.isLoggedIn()) {//check if loggedIn
    if (loginservice.isAdmin())//check if admin
      return true;
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
    console.log("here");
    if (!loginservice.isAdmin())//check if admin
      return true;
    return false;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};