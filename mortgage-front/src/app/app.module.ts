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
import { customerService } from './services/costumer.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NavigationMenuComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    customerService
  ],
  bootstrap: [AppComponent]
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
