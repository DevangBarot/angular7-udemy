import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService{

    constructor(private http: Http,private recipeService: RecipeService){}

    storesRecipes(){
        return this.http.put('https://ng-recipe-book-36335.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes(){
        this.http.get('https://ng-recipe-book-36335.firebaseio.com/recipes.json')
        .subscribe(
            (response: Response) => {   
                console.log("Data Fetched");
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        )
    }
}