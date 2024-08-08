import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'accessibility-menu',
  templateUrl: './accessibility-menu.component.html',
  styleUrl: './accessibility-menu.component.css'
})
export class AccessibilityMenuComponent {
  highContrastEnabled = false;
  selectedColor = 'default';
  @ViewChild('keyboardContainer', { static: false })
  keyboardContainer!: ElementRef;

  constructor(private renderer: Renderer2,private el: ElementRef) {}
  ngOnInit(): void {
    // const isHighContrast = localStorage.getItem('highContrast') === 'true';
    // if (isHighContrast) {
    //   this.renderer.addClass(document.body, 'high-contrast');
    // }
  }
  toggleHighContrast() {
      document.body.classList.toggle('high-contrast');
  }
  toggleTextToSpeech(enabled: boolean) {
    if (enabled) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.body.innerText));
    } else {
      window.speechSynthesis.cancel();
    }
  }
  toggleFontSize(enable: boolean) {
    if (enable) {
      document.body.style.fontSize = '50px';  // Updated to a reasonable large size
    } else {
      document.body.style.fontSize = '16px';  // Default size
    }
  }
  toggleLineHeight(enable: boolean) {
    if (enable) {
      document.body.style.lineHeight = '2';  // Double line height
    } else {
      document.body.style.lineHeight = 'normal';  // Default line height
    }
  }
  toggleTextAlign(enable: boolean, align: string) {
    if (enable) {
      document.body.style.textAlign = align;
    } else {
      document.body.style.textAlign = 'initial';  // Default text align
    }
  }
  toggleTextSpacing(enable: boolean) {
    if (enable) {
      document.body.style.letterSpacing = '0.1em';  // Wide spacing
    } else {
      document.body.style.letterSpacing = 'normal';  // Default spacing
    }
  }
}
