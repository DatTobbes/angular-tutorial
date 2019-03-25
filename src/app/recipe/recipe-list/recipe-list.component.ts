import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes :Recipe[] = [
    new Recipe('Dummy1', 'Dies ist ein dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg' ),
    new Recipe('Dummy1', 'Dies ist ein dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg' )
  ]

  selectedRecipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe)
  }
}
