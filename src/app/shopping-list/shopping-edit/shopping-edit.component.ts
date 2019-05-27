import {Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import * as ShoppingListActions from '../store/shopping-list.actions';

import { Ingrediant } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingrediant;
  constructor(private slService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: Ingrediant[]}}>) { }

  ngOnInit() {
    this.subscription =
      this.slService.startedEditing.subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        (index: number) => {
              this.editedItemIndex = index;
              this.editMode = true;
              this.editedItem = this.slService.getIngrediant(index);
              this.slForm.setValue({
                name: this.editedItem.name,
                amount: this.editedItem.amount
              });
        });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
    const newIngrediant = new Ingrediant(value.name, value.amount);
    if (this.editMode) {
      console.log('Inside If');
      this.slService.updateIngrediant(this.editedItemIndex , newIngrediant);
    } else {
      console.log('Inside else');
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngrediant));
      console.log(this.store.select('shoppingList'));
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.slService.deleteIngrediant(this.editedItemIndex);
    this.onClear();
    }

  onClear() {
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
