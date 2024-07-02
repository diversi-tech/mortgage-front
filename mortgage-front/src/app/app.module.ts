import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from "@angular/router";
import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
import { ExampleComponent } from './Components/example/example.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { customerService } from './services/costumer.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './material/material.module';
import { LeadListComponent } from './Components/lead-list/lead-list.component';
import { leadService } from './services/lead.service';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LeadDetailComponent } from './Components/lead-detail-modal/lead-detail-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    // LeadListComponent,
    // LeadDetailComponent
      ],
  imports: [
    BrowserModule,MaterialModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,MatFormFieldModule,MatInputModule,
    NavigationMenuComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    customerService,leadService
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ConfirmDialog] // ensure your dialog component is listed here

})
export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NavigationMenuComponent } from './Components/navigation-menu/navigation-menu.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { DataVisualizationComponent } from './Components/data-visualization/data-visualization.component';
// import { DocumentDefinitionComponent } from './Components/document-definition/document-definition.component';
// import { LoginComponent } from './Components/login/login.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavigationMenuComponent,
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     RouterModule,
//     AppRoutingModule,
//     MatButtonModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatListModule, 
//     DocumentDefinitionComponent,
//     DataVisualizationComponent,
//     LoginComponent
//   ],
//   providers: [
//     provideAnimationsAsync()
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
