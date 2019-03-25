import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import { Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes :Recipe[] = [
    new Recipe('Dummy1', 'Dies ist ein dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg', [new Ingredient("Pommes", 10), new Ingredient("Ketchup",1)] ),
    new Recipe('Dummy2', 'Dies ist ein dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg', [new Ingredient("Pommes", 10), new Ingredient("Ketchup",1)] )
  ]

  selectedRecipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe)
  }
}
