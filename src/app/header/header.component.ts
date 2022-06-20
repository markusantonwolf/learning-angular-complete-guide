import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    isOpen: boolean = false;
    constructor() {}

    ngOnInit(): void {}

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
}
