import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

private apiUrl: string = "http://18.118.120.32:8080/api/";

  constructor(private http: HttpClient) { }

  createRecipe(recipe: {
    name: string,
    imageUrl: string,
    ingredients: any[],
    allergens: any[],
    preparation: string,
    category: string,
    vegetarian: boolean

  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-recipe`, recipe);
  }

  getAllRecipes() {
    return this.http.get<any>(`${this.apiUrl}/get-all-recipes`)
  }

  getRecipeByIngredientName(name: Observable<any>) {
    return this.http.get<any>(`${this.apiUrl}/get-recipe-by-ingredient-name/${name}`)
  }

}

