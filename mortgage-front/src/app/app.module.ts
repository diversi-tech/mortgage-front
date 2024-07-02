
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from "@angular/router";
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { ExampleComponent } from './Components/example/example.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { customerService } from './Services/costumer.service';
import { leadService } from './Services/lead.service';
import { DocumentsListCustomerService } from './Services/documentListCustomer.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    AppComponent,
    ExampleComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NavigationMenuComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    customerService,
    leadService,
    DocumentsListCustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }