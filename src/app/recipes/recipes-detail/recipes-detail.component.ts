import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipes-detail',
    templateUrl: './recipes-detail.component.html',
})
export class RecipesDetailComponent implements OnInit {
    @Input() details: Recipe
    constructor() {}

    ngOnInit(): void {}
}
