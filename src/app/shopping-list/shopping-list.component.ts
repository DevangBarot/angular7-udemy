import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';

import { Ingrediant } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrediant[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngrediants()
    this.slService.ingrediantChanged
    .subscribe(
      (ingrediant: Ingrediant[]) => {
        this.ingredients = ingrediant;
      });
    }

    onEditItem(index: number) {
      this.slService.startedEditing.next(index);
    }
}
