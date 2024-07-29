import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { customerService } from './shared/Services/costumer.service';
import { leadService } from './shared/Services/lead.service';
import { DocumentsListCustomerService } from './shared/Services/documents-list-customer.service';
import { UserService } from './shared/Services/user.service';
import { magicLinkService } from './shared/Services/magicLinkService';
import { DocumentTypeService } from './shared/Services/documentType.service';
import { loginService } from './shared/Services/login.service';
import { MailingListService } from './shared/Services/mailing-list.service';
import { SharedModule } from './shared/shared.module';
import { LeadModule } from './lead/lead.module';
import { GlobalModule } from './global/global.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //Local modules
    SharedModule,
    LeadModule,
    GlobalModule,
    CustomerModule,
    AuthModule,
    AdminModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },//adding the token to every request
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    //All the services that are injected into the components
    customerService,
    leadService,
    DocumentsListCustomerService,
    UserService,
    DocumentTypeService,
    magicLinkService,
    loginService,
    MailingListService,
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }



