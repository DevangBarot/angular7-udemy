import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';
import {RecipesItemComponent} from './recipes-list/recipes-item/recipes-item.component';
import {DropdownDirective} from '../shared/dropdown.directive';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipesListComponent,
    RecipeEditComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {

}
