import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test 1',
            'This is a test recipe',
            'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 1)
            ]),
        new Recipe('Test 2',
            'This is another test recipe',
            'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 1),
                new Ingredient('Lettuce', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}
