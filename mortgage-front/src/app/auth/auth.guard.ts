import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../shared/Services/auth.service';
import { loginService } from '../shared/Services/login.service';
export const authGuardAdmin: CanActivateFn = (route, state) => {
  const _loginService  = inject(loginService);
  const router = inject(Router);
  if (_loginService.isLoggedIn()) {//check if loggedIn
    if (_loginService.isAdmin())//check if admin
      return true;
    router.navigate(['auth/login']);
    return false;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};

export const authGuard: CanActivateFn = (route, state) => {
  const _loginService = inject(loginService);
  const router = inject(Router);
  if (_loginService.isLoggedIn()) {//check if loggedIn
    return true;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};
