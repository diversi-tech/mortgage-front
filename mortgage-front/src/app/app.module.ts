import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from "@angular/router";
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
import { LoginComponent } from './Components/login/login.component';
import { ExampleComponent } from './Components/example/example.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DocumentsListCustomerComponent } from './Components/documents-list-customer/documents-list-customer.component';
import { HttpClientModule } from '@angular/common/http';




// import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NavigationMenuComponent,
    DocumentsListCustomerComponent,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
