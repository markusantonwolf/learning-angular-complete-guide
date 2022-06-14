import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Test', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia est fuga aperiam sapiente sed, doloremque commodi iste repellendus totam rerum quos assumenda neque dignissimos nobis temporibus eveniet saepe quidem.', 'https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/iStock-1248291191.jpg'),
        new Recipe('Test2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae officia est fuga aperiam sapiente sed, doloremque commodi iste repellendus totam rerum quos assumenda neque dignissimos nobis temporibus eveniet saepe quidem.', 'https://static.fanpage.it/wp-content/uploads/sites/22/2021/06/iStock-1248291191.jpg')
    ];
    constructor() {}

    ngOnInit(): void {}
}

