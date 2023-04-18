import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    ingredientChanged=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[new Ingredient('Apples',5), new Ingredient('Tomatoes',10)];

    IngredientAdded(ingredientData:Ingredient)
    {
      this.ingredients.push(ingredientData);
     this.ingredientChanged.emit(this.ingredients.slice());
      
    }
    getIngredients()
    {
        return this.ingredients.slice();
    }


    addIngredients(ingredients:Ingredient[])
    {
        // for(let ingredient of ingredients)
        // {
        //     this.ingredients.push(ingredient);
        // }
this.ingredients.push(...ingredients);
this.ingredientChanged.emit(this.ingredients.slice());
    }
    
}