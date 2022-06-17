import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @HostBinding('style.backgroundColor') color: string = 'transparent';

    ngOnInit() {}

    @HostListener('mouseenter') mouseHover(e: Event) {
        this.color = 'green';
    }
    @HostListener('mouseleave') mouseOut(e: Event) {
        this.color = 'transparent';
        console.info('event', e);
    }
}
