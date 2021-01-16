import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Test', 'This is a test recipe', 'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d'),
        new Recipe('Test', 'This is a test recipe', 'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d')
    ];

    constructor() { }

    ngOnInit() {

    }

}