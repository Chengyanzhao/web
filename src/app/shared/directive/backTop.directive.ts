import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[backTop]' })
export class BackTopDirective {
    constructor(
    ) {
        //this.viewContainer.clear();
    }
    // @HostListener('click', ['$event']) onclick(event: MouseEvent) {
    //     window.scrollTo(0);
    // }
    // @HostListener('scroll', ['$event']) onscroll(event: UIEvent) {
    //     if (window.scrollY > window.innerHeight) {
    //         this.viewContainer.createEmbeddedView(this.templateRef);
    //     } else {
    //         this.viewContainer.clear();
    //     }
    // }
    @HostListener('click', ['$event']) onclick(event: MouseEvent) {
        event.preventDefault();
        const position = 0;
        const requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            window.setTimeout(fn, 15);
        };
        let step = () => {
            window.document.body.scrollTop = position;
            requestAnimationFrame(step);

        };
        step();
    }
}