import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';

import { Ingrediant } from '../shared/ingredient.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingrediant[]}>;
  constructor(private slService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: Ingrediant[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.slService.ingrediantChanged
    // .subscribe(
    //   (ingrediant: Ingrediant[]) => {
    //     this.ingredients = ingrediant;
    //   });
    }

    onEditItem(index: number) {
      this.slService.startedEditing.next(index);
    }
}
