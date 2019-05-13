import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngrediant = new Ingrediant(ingName, ingAmount);
      this.slService.addIngrediants(newIngrediant);
  }
}
