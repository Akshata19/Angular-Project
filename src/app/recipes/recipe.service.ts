import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>();
    constructor(private shoppingListService:ShoppingListService){}
 private   recipes: Recipe[]=[
        new Recipe(
            'Tasty Schnitzel', 
            'A super tasty Schnitzel-Just awesome!',
            'https://insanelygoodrecipes.com/wp-content/uploads/2022/03/Homemade-Pork-Schnitzel-with-Cauliflower-and-Lemons.jpg',
            [new Ingredient('Meat',1),
        new Ingredient('French Fries',20)]
            ),
        new Recipe(
            'Big Fat Burger', 
            'What else You need to say?',
            'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg',
            [new Ingredient('Buns',2),
        new Ingredient('Meat', 1)])
        ];

        getRecipes()
        {
            return this.recipes.slice();//we will not get direct access to recipe array we will get copy of it.
        }

        addIngredientsToShoppingList(ingredients:Ingredient[])
        {
this.shoppingListService.addIngredients(ingredients);
        }
        
}