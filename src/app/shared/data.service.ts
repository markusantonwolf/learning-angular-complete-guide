import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    data = [
        { name: 'Erster Satz', amount: 1 },
        { name: 'Zweiter Satz', amount: 1 },
        { name: 'Dritter Satz', amount: 1 },
        { name: 'Vierter Satz', amount: 1 },
        { name: 'Fünfter Satz', amount: 1 },
        { name: 'Sechster Satz', amount: 6 },
    ];

    // statusChange = new EventEmitter<string>();

    constructor(private logging: LoggingService) {}

    addData(name: string, amount: number) {
        this.data.push({
            name: name,
            amount: amount,
        });
        // this.logging.log('addData');
    }

    updateAmount(id: number, amount: number) {
        this.data[id].amount = amount;
    }

    get() {
        return this.data;
    }
}
