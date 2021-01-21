import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {

    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Test 1', 'This is a test recipe', 'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d'),
        new Recipe('Test 2', 'This is another test recipe', 'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d')
    ];

    constructor() { }

    ngOnInit() { }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}