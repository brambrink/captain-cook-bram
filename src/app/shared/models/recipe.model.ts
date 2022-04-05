import { Ingredient } from "./ingredient.model";

export class Recipe {
  constructor(
    public name: string,
    public portionSize: number,
    public method: string,
    public imageURL: string,
    public id: number,
    public ingredients: Ingredient[],
  ) {}
}
