import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredients[] = [
        new Ingredients('test ingedient', 2),
        new Ingredients('test ingedient2', 2),
    ];
    newItemName: string = '';
    newItemAmount: number = 0;
    public show: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleShow(item: Ingredients) {
        this.show = !this.show;
    }

    addItem() {
        this.ingredients.push(
            new Ingredients(this.newItemName, this.newItemAmount)
        );
        this.newItemAmount = 0;
        this.newItemName = '';
    }
}
