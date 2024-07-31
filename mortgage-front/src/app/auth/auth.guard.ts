import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, NavigationStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { loginService } from '../shared/Services/login.service';
import { leadService } from '../shared/Services/lead.service';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

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
//   let id: number, token, isvalid;
//   rout.queryParams.subscribe(params => {
//     id = params['id']; // Get the 'id' parameter
//     token = params['token']; // Get the 'token' parameter if needed
//     console.log('ID:', id);
//     console.log('Token:', token);
//     leadservice.checkToken(id).subscribe(
//       response => {
//         if (response.status === 200) {
//           //this.router.navigate(['lead', this?.id]);
//           isvalid = true
//         }
//         else {
//           isvalid = false;
//         }
//       },
//     );
//   });
//   return isvalid ? true : false;
// };


export const authGuardLead: CanActivateFn = (route, state) => {
  const leadservice = inject(leadService);
  const router = inject(Router);

  return new Observable<boolean>(observer => {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        const params = new URLSearchParams(url.split('?')[1]);

        const id = params.get('id');
        const token = params.get('token');
        
        console.log('ID:', id);
        console.log('Token:', token);

        leadservice.checkToken(Number(id)).subscribe(
          response => {
            if (response.status === 200) {
              observer.next(true);
              observer.complete();
            } else {
              observer.next(false);
              observer.complete();
            }
          },
          error => {
            observer.next(false);
            observer.complete();
          }
        );
      }
    });
  });
};

