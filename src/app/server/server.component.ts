import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
    text: String = 'Server';
    isButtonDisabled = false;
    constructor() {
        setTimeout(() => {
            this.isButtonDisabled = true;
            console.log('setTimeout Constructor')
        }, 2000);
    }

    ngOnInit(): void {
        setTimeout(() => {
            console.log('setTimeout Init')
        }, 2000);
    }

    onClick() {
        console.info('CLICK');
    }
}
