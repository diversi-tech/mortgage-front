import { Component, Input } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';  // ייבוא נכון של file-saver
import { customerService } from '../../Services/costumer.service';
import { MaterialModule } from '../../material/material.module';
import { Customer, Customer_type } from '../../Models/Customer';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
}
