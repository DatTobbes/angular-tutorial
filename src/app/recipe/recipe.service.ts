import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'http://kmetro.restaurantden.com/wp-content/uploads/sites/67/2016/03/dish_1.jpg',
      [
        new Ingredient('Pommes', 10),
        new Ingredient('Schnitzel', 1),
      ]
    ),
    new Recipe('Salat', 'Auch lecker?', 'http://www.about.ch/culture/food/salat.jpg', []),
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }
}
