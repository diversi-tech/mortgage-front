import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',

})
export class FooterComponent implements AfterViewInit{
  @ViewChild('footer') footer!: ElementRef;

  ngAfterViewInit() {
  }

}
