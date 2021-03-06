import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Test 1',
    //         'This is a test recipe',
    //         'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Bun', 1)
    //         ]),
    //     new Recipe('Test 2',
    //         'This is another test recipe',
    //         'https://c.pxhere.com/images/d6/32/9598e40fd9bda7a852946bea77b5-1604207.jpg!d',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Bun', 1),
    //             new Ingredient('Lettuce', 1)
    //         ])
    // ];
    private recipes: Recipe[] = [];

    constructor(
        private slService: ShoppingListService,
        private store: Store<{
            shoppingList: {
                ingredients: Ingredient[]
            }
        }>
    ) {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        //this.slService.addIngredients(ingredients);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
