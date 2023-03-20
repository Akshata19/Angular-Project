import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes: Recipe[]=[
new Recipe('A test Recipe', 'This is simply a Test','https://thumbs.dreamstime.com/b/various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-97076702.jpg'),
new Recipe('A test Recipe', 'This is simply a Test','https://thumbs.dreamstime.com/b/various-spices-recipe-word-vintage-background-copyspace-selective-focus-food-baking-cooking-concept-97076702.jpg')

];
}
