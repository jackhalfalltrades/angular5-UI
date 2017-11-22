import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') toggleClose() {
    this.isOpen = false;
  }

  // @HostListener('click') mouserover(eventData: Event) {
  //   this.renderer.addClass(this.elementRef.nativeElement, 'open');
  // }

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  // }

}
