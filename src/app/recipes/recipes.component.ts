import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit , OnDestroy {
  subscription: Subscription;
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeSelected
    .subscribe((recipe: Recipe) => {this.selectedRecipe = recipe}
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
