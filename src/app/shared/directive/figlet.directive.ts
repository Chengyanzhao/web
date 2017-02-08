import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[figlet]' })
export class FigletDirective {
    @HostListener('click', ['$event']) onKeyDown(event: KeyboardEvent): void {
        console.log(event);
    }
}