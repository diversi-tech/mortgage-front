import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

// import { MatDialog } from '@angular/material/dialog';
// import { MatDialogRef } from '@angular/material/dialog';





const modules=[
  MatListModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatPaginator, 
  MatPaginatorModule,
  MatSort, 
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
  // MatDialog,
  // MatDialogRef
]

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: modules,
  
})
export class MaterialModule { }
