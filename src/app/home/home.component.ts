import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    style: boolean = false;
    constructor() {}

    ngOnInit(): void {}

    toogleStyle() {
      this.style = !this.style
    }
}
