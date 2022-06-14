import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('testInput', { static: true}) testInputValue: ElementRef

    constructor() {}

    ngOnInit(): void {
        console.log('init', this.testInputValue)
    }

    onClick() {
        console.log(this.testInputValue.nativeElement.value)
    }
}
