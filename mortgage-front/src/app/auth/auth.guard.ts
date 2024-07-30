import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { loginService } from '../shared/Services/login.service';
import { leadService } from '../shared/Services/lead.service';

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const loginservice = inject(loginService);
  const router = inject(Router);
  if (loginservice.isLoggedIn()) {//check if loggedIn
    console.log("here");
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

// export const authGuardLead: CanActivateFn = (route, state) => {
//   const rout = inject(ActivatedRoute);
//   const leadservice = inject(leadService);
//   let id:number,token;
//   rout.queryParams.subscribe(params => {
//     id = params['id']; // Get the 'id' parameter
//     token = params['token']; // Get the 'token' parameter if needed
//     console.log('ID:', id);
//     console.log('Token:', token);
//     leadservice.checkToken(id).subscribe(
//       response => {
//         if (response.status === 200) {
//           //this.router.navigate(['lead', this?.id]);
//           return true
//         }
//         else {
//           return false;
//         }
//       },
//     );
//   });
// };


