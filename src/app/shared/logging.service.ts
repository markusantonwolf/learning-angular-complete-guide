import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';

@Injectable({
    providedIn: 'root',
})
export class LoggingService {
    constructor() {
    }

    log(message: string) {
        console.info('LoggingService:', message);
    }

    loggButtonClicked() {
        console.info('clicked');
    }
}
