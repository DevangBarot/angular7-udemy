import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingrediant } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe>();
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Recipe 1',
            'This is a Description of Recipe 1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bro1oP1uOgN3RPKLvfLacQoKtzsmXttNtuLlF7Yhy_DnG8ZM',[
                new Ingrediant('Cabbage', 1),
                new Ingrediant('Broccoli', 2)
            ]),
        new Recipe(
            'Recipe 2',
            'This is a Description of Recipe 2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bro1oP1uOgN3RPKLvfLacQoKtzsmXttNtuLlF7Yhy_DnG8ZM',[
                new Ingrediant('Bread', 1),
                new Ingrediant('Cheese', 1)
            ])
      ];
    constructor(private shoppingListService: ShoppingListService ) {}

    getRecipes() {
        return this.recipes.slice();
    }

    // setRecipes(recipes: Recipe[]) {
    //     this.recipes = recipes;
    //     // this.recipeSelected.next(this.recipes.slice());
    // }
    addIngrediantsToShoppingList(ingrediants: Ingrediant[]) {
        this.shoppingListService.addIngrediantOfItem(ingrediants);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      // @ts-ignore
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      // @ts-ignore
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index , 1);
      // @ts-ignore
      this.recipesChanged.next(this.recipes.slice());
    }
}
