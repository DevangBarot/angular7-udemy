      import * as ShoppingListAction from './shopping-list.actions';
      import {Ingrediant} from '../../shared/ingredient.model';
      export const ADD_INGREDIENT = 'ADD_INGREDIENT';

      const initialState = {
        ingredients: [
          new Ingrediant('Apples', 5),
          new Ingrediant('Apples', 10)
        ]
      };

      export function shoppingListReducer(state = initialState , action: ShoppingListAction.ShoppingListActions) {
        switch (action.type) {
          case ShoppingListAction.ADD_INGREDIENT:
          return {
            ...state,
            ingredients: [...state.ingredients]
          };
          default:
            return state;
        }
        return state;
      }
