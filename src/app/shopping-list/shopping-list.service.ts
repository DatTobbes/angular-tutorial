import { Ingredient } from "app/shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [];

    getIngredients(){
        return this.ingredients;
    }

    addIngredients( ingredients: Ingredient[]){
        //This command is used to push multiple elements to the array
        Array.prototype.push.apply(this.ingredients, ingredients)
    }
}