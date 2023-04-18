import { Directive, ElementRef, HostBinding, Renderer2, HostListener } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective
{
  constructor(private elRef:ElementRef, private renderer: Renderer2)  {}

@HostBinding('class.open')isOpen=false;
  @HostListener('click') toggleOpen(eventData:Event)
  {
    this.isOpen= !this.isOpen;
   // this.renderer.addClass(this.elRef.nativeElement, 'open');
  }
}