import {Recipe} from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{
    private recipes: Recipe[] =  [
        new Recipe('Dummy1', 'Dies ist ein dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg', 
                    [new Ingredient("Pommes", 10), new Ingredient("Ketchup",1)] ),
        new Recipe('Dummy2', 'Dies ist ein dummy', 'http://guides.global/images/guides/global/dummy_web_page.jpg',
                    [new Ingredient("Pommes", 10), new Ingredient("Ketchup",1)] )
    ];
    
    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
          return this.recipes;
    }    
}