import {
  AfterContentInit,
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[autofocus], [autoFocus], [auto-focus]'
})
export class AutoFocusDirective implements AfterContentInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  ngAfterContentInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement,
      'focus',
      []
    );
  }
}
