import {Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import index from '@angular/cli/lib/cli';

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
  constructor(private slService: ShoppingListService) { }

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

  onAddItem(form: NgForm) {
    const value = form.value;
    console.log(value);
    const newIngrediant = new Ingrediant(value.name, value.amount);
    this.slService.addIngrediants(newIngrediant);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
