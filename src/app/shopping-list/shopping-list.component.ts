import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Ingredients } from '../shared/ingredients.model';
import { LoggingService } from '../shared/logging.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    providers: [LoggingService, DataService],
})
export class ShoppingListComponent implements OnInit {
    // ingredients: Ingredients[] = [
    //     new Ingredients('test ingedient', 2),
    //     new Ingredients('test ingedient2', 2),
    // ];
    ingredients: Ingredients[] = [];
    newItemName: string = '';
    newItemAmount: number = 0;
    public show: boolean = false;

    constructor(private logging: LoggingService, private data: DataService) {}

    ngOnInit(): void {
        // console.log('data', this.data.get())
        this.ingredients = this.data.get();
    }

    toggleShow(item: Ingredients) {
        this.show = !this.show;
    }

    addItem() {
        // this.ingredients.push(
        //     new Ingredients(this.newItemName, this.newItemAmount)
        // );
        // this.data.statusChange.emit('addItem');
        this.data.addData(this.newItemName, this.newItemAmount);
        this.newItemAmount = 0;
        this.newItemName = '';
        // this.logging.loggButtonClicked();
    }
}
