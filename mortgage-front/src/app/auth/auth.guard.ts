import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/Services/auth.service';

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {//check if loggedIn
    if (authService.isAdmin())//check if admin
      return true;
    window.history.back()
    return false;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {//check if loggedIn
    return true;
  } else {//if not loggedIn:
    router.navigate(['auth/login']);
    return false;
  }
};
