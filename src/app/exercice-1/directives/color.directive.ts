import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {

  constructor() { }

  @HostBinding('style.color') randomColor : string;
  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {

    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      let randomColor = Math.floor(0x1000000 * Math.random()).toString(16);
      // pour génerer une couleur de façon random 
      this.randomColor = `#${randomColor}`;
    }
    
  }

}
