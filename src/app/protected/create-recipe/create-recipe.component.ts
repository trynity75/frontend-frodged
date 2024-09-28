import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [RouterLink, NavbarComponent, ReactiveFormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})


export class CreateRecipeComponent {
  form!: FormGroup

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      imageurl: ['', []],
      ingredients: ['', []],
      allergens: ['', []],
      preparation:  ['', []],
      category: ['', []],
      vegetarian: ['', []]
    })
  }

  onSubmit() {
    console.log(this.form.value)
    const formValues = this.form.value;
    const ingredientsArray = this.parseIngredients(formValues.ingredients);

    const recipeData = {
      name: formValues.name,
      imageurl: formValues.imageurl,
      ingredients: ingredientsArray,
      allergens: formValues.allergens,
      preparation: formValues.preparation,
      category: formValues.category,
      vegetarian: formValues.vegetarian,
    };

    this.http.post('http://localhost:8080/api/create-recipe', recipeData)
      .subscribe(response => {
        console.log(response);
      });
  }

  parseIngredients(ingredients: string): string[] {
    // Split the string by commas and trim each element
    return ingredients.split(',').map((ingredient) => ingredient.trim());
  }
}
