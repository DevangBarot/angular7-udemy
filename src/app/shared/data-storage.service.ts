import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: Http ,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storesRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-36335.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        console.log('token', token);
        this.http.get('https://ng-recipe-book-36335.firebaseio.com/recipes.json?auth=' + token)
        .subscribe(
            (response: Response) => {
                console.log('Data Fetched');
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
