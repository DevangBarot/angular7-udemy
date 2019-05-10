import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected  = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1','This is a Description of Recipe 1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bro1oP1uOgN3RPKLvfLacQoKtzsmXttNtuLlF7Yhy_DnG8ZM'),
    new Recipe('Recipe 2','This is a Description of Recipe 2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bro1oP1uOgN3RPKLvfLacQoKtzsmXttNtuLlF7Yhy_DnG8ZM')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }
}
