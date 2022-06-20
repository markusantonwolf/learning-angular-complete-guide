import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appHighlight') highlightColor: string = '#00ff00';
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    @HostBinding('style.backgroundColor') color: string = 'transparent';

    ngOnInit() {
        this.color = this.defaultColor;
    }

    @HostListener('mouseenter') mouseHover(e: Event) {
        this.color = this.highlightColor;
    }
    @HostListener('mouseleave') mouseOut(e: Event) {
        this.color = this.defaultColor;
        // console.info('event', e);
    }
}
