import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
    recipeDetails: Recipe
    constructor() {}

    ngOnInit(): void {}

    selectedRecipeItem(item: Recipe) {
        this.recipeDetails = item
        console.info('selectedRecipeItem', item);
    }
}
