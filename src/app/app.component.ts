import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    username: String = '';

    onClick() {
        if (this.username.length <= 0) {
            console.info('no click');
        } else {
            this.username = '';
        }
    }

    isClickable() {
        return this.username.length <= 0 ? false : true;
    }
}
