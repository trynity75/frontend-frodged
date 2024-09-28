import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './protected/create-product/create-product.component';
import { CreateRecipeComponent } from './protected/create-recipe/create-recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesByIngredientComponent } from './components/recipes-by-ingredient/recipes-by-ingredient.component';


export const routes: Routes = [
  { path: '', title: `Landing`, component: LandingComponent },
  { path: 'products', title: 'Products', component: ProductsComponent },
  { path: 'recipes-by-ingredient/:name', title: 'Recipes', component: RecipesByIngredientComponent },
  { path: 'recipes', title: 'Recipes', component: RecipesComponent },
  { path: 'create-product', title: 'Create Product', component: CreateProductComponent },
  { path:'create-recipe', title: 'Create Recipe', component: CreateRecipeComponent}
];
