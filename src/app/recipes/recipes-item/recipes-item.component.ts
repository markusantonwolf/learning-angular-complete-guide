import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipes-item',
    templateUrl: './recipes-item.component.html',
})
export class RecipesItemComponent implements OnInit {
    @Input() item: Recipe;
    @Output() selectedRecipe = new EventEmitter();
    active: boolean = false;
    constructor() {}

    ngOnInit(): void {}
    onClick() {
        this.selectedRecipe.emit();
        this.active = true;
    }
}
