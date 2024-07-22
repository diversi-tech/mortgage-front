import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    FooterComponent,
    ToolbarComponent,
    NavigationMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
    // BrowserAnimationsModule, BidiModule,CdkMenu,CdkMenuItem,,
    // CdkMenuTrigger,
  ],
  exports: [
    ConfirmDialogComponent,
    FooterComponent,
    ToolbarComponent,
    NavigationMenuComponent
  ]
})
export class SharedModule { }
