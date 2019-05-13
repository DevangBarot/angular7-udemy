import { Ingrediant } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingrediantChanged = new EventEmitter<Ingrediant[]>();
    private ingredients: Ingrediant[] = [
        new Ingrediant('Apples',5),
        new Ingrediant('Apples',10),
    ];
   

    getIngrediants() {
        return this.ingredients.slice();
    }

    addIngrediants(ingrediant: Ingrediant){
        this.ingredients.push(ingrediant);
        this.ingrediantChanged.emit(this.ingredients.slice());
    }

    addIngrediantOfItem(ingrediants: Ingrediant[]){
        this.ingredients.push(...ingrediants);
        this.ingrediantChanged.emit(this.ingredients.slice());
    }
}