import { Ingrediant } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingrediantChanged = new EventEmitter<Ingrediant[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingrediant[] = [
        new Ingrediant('Apples', 5),
        new Ingrediant('Apples', 10),
    ];

    getIngrediants() {
        return this.ingredients.slice();
    }

    getIngrediant(index: number) {
      return this.ingredients[index];
    }
    addIngrediants(ingrediant: Ingrediant) {
        this.ingredients.push(ingrediant);
        this.ingrediantChanged.emit(this.ingredients.slice());
    }

    addIngrediantOfItem(ingrediants: Ingrediant[]) {
        this.ingredients.push(...ingrediants);
        this.ingrediantChanged.emit(this.ingredients.slice());
    }
}
