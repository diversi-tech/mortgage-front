import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormField } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules=[
  MatTableModule,
  MatListModule,MatSnackBarModule,
  MatCardModule,MatGridListModule,MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
   MatCheckboxModule,
   MatStepperModule,
   MatSelectModule,
   MatIcon,
   MatToolbarModule,
   MatFormField,
   MatTooltipModule,
   MatMenuModule
  //  MatSnackBar
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: modules
  
})
export class MaterialModule { }