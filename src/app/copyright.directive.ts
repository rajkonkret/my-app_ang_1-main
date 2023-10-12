import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef) {
    const  currentYear = new Date().getFullYear;
    const targrtEl: HTMLElement = el.nativeElement;
    targrtEl.classList.add('copyright');
    targrtEl.textContent = `Copyright @${currentYear} All Rights Reserved`;
   }

}
