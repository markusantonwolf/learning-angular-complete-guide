import {
    Directive,
    ElementRef,
    HostListener,
    OnInit,
    Renderer2,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.setStyle(
            this.element.nativeElement,
            'background-color',
            'gray'
        );
        // this.element.nativeElement.style.backgroundColor = '#ff00ff';
    }

    @HostListener('mouseenter') mouseHover(e: Event) {
        this.renderer.setStyle(
            this.element.nativeElement,
            'background-color',
            'green'
        );
    }
    @HostListener('mouseleave') mouseOut(e: Event) {
        this.renderer.setStyle(
            this.element.nativeElement,
            'background-color',
            'white'
        );
    }
}
