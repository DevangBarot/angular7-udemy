import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  onAddToShoppingList() {
    this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediants);
  }
  onEditRecipe() {
    //this.router.navigate(['edit'],{relativeTo: this.route});
    this.router.navigate(['../' , this.id , 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
