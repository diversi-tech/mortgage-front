import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'accessibility-menu',
  templateUrl: './accessibility-menu.component.html',
  styleUrls: ['./accessibility-menu.component.css']
})
export class AccessibilityMenuComponent {
  highContrastEnabled = false;
  fontSizeEnabled = false;
  lineHeightEnabled = false;
  textAlignEnabled = { left: false, center: false, right: false };
  textSpacingEnabled = false;
  textToSpeechEnabled = false;

  @ViewChild('keyboardContainer', { static: false })
  keyboardContainer!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.applySavedSettings();
  }

  applySavedSettings() {
    if (this.isLocalStorageAvailable()) {
      this.highContrastEnabled = localStorage.getItem('highContrast') === 'true';
      this.fontSizeEnabled = localStorage.getItem('fontSizeEnabled') === 'true';
      this.lineHeightEnabled = localStorage.getItem('lineHeightEnabled') === 'true';
      this.textToSpeechEnabled = localStorage.getItem('textToSpeechEnabled') === 'true';
      this.textSpacingEnabled = localStorage.getItem('textSpacingEnabled') === 'true';
      const textAlign = localStorage.getItem('textAlign');

      if (textAlign) {
        this.textAlignEnabled = {
          left: textAlign === 'left',
          center: textAlign === 'center',
          right: textAlign === 'right'
        };
      }

      if (this.highContrastEnabled) {
        this.renderer.addClass(document.documentElement, 'high-contrast');
      }
      this.toggleFontSize(this.fontSizeEnabled);
      this.toggleLineHeight(this.lineHeightEnabled);
      this.toggleTextSpacing(this.textSpacingEnabled);
      if (textAlign&&(textAlign=='left' ||textAlign=='center' ||textAlign== 'right')) {
        this.toggleTextAlign(true, textAlign);
      }
      if (this.textToSpeechEnabled) {
        this.toggleTextToSpeech(true);
      }
    }
  }
 isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleHighContrast() {
    this.highContrastEnabled = !this.highContrastEnabled;
    const className = 'high-contrast';

    if (this.highContrastEnabled) {
      this.renderer.addClass(document.documentElement, className);
    } else {
      this.renderer.removeClass(document.documentElement, className);
    }

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('highContrast', this.highContrastEnabled.toString());
    }
  }

  toggleTextToSpeech(enabled: boolean) {
    this.textToSpeechEnabled = enabled;

    if (enabled) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.body.innerText));
    } else {
      window.speechSynthesis.cancel();
    }

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('textToSpeechEnabled', enabled.toString());
    }
  }

  toggleFontSize(enable: boolean) {
    this.fontSizeEnabled = enable;
    const size = enable ? '150%' : '100%';
    document.documentElement.style.fontSize = size;

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('fontSizeEnabled', enable.toString());
      localStorage.setItem('fontSize', size);
    }
  }

  toggleLineHeight(enable: boolean) {
    this.lineHeightEnabled = enable;
    const lineHeight = enable ? '2' : 'normal';
    document.documentElement.style.lineHeight = lineHeight;

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('lineHeightEnabled', enable.toString());
      localStorage.setItem('lineHeight', lineHeight);
    }
  }

  toggleTextAlign(enable: boolean, align: 'left' | 'center' | 'right') {
    
    this.textAlignEnabled = { left: false, center: false, right: false };
    this.textAlignEnabled[align] = enable;

    const alignment = enable ? align : 'initial';
    document.documentElement.style.textAlign = alignment;

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('textAlign', enable ? align : 'initial');
    }
  }

  toggleTextSpacing(enable: boolean) {
    this.textSpacingEnabled = enable;
    const spacing = enable ? '0.1em' : 'normal';
    document.documentElement.style.letterSpacing = spacing;

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('textSpacingEnabled', enable.toString());
      localStorage.setItem('letterSpacing', spacing);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
