import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipes-item',
    templateUrl: './recipes-item.component.html',
})
export class RecipesItemComponent implements OnInit {
    @Input() item: Recipe;
    constructor() {}

    ngOnInit(): void {}
}
