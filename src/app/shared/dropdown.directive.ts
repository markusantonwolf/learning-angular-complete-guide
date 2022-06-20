import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;
    @HostListener('click') toggleOpen() {
        console.info('click', this.isOpen);
        this.isOpen = !this.isOpen;
    }
    constructor() {}
}
