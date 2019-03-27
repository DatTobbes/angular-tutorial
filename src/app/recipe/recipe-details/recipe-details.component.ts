import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styles: []
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService:RecipeService,
              private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  onAddToList(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}
