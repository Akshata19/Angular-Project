import { Component, Input, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
@Injectable()
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
@Input()recipe:Recipe
constructor(private recipeService:RecipeService){}
ToShoppingList()
{
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

}


}
