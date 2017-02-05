import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[cancelDefEvent]' })
export class CancelDefEvent {
    @HostListener('click', ['$event']) onClick(event: MouseEvent) {
        event.preventDefault();
        console.log('directive-cancelDefEvent:defaultEvent has been cancel')
    }
}