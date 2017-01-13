import { Directive, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({ selector: '[go-home]' })
export class GoHomeDirective {
    constructor(private router: Router) {
        
    }
    @HostListener('click') onClick() {
        //$event.preventDefault();
        this.router.navigate(['/home']);
    }
}