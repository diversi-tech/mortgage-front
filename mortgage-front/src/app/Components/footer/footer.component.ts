import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { MatToolbar } from '@angular/material/toolbar';
// import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',

})
export class FooterComponent implements AfterViewInit{
  @ViewChild('footer') footer!: ElementRef;

  ngAfterViewInit() {
  }

}
