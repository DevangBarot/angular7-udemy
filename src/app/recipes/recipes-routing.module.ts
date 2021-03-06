import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipesDetailsComponent} from './recipes-details/recipes-details.component';

const recipesRoutes: Routes = [
      { path: '' , component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent},
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
            { path: ':id', component: RecipesDetailsComponent},
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
        ]
      }
];
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class RecipesRoutingModule {}
