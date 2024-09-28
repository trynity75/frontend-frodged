import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ngOnInit() {
    this.id = sessionStorage.getItem("id");
    this.getAllProducts()
    this.getUserById()
  }
  allProducts: any[] = [] 
  userProducts: any[] = [] 
  selectedProduct: any = null;
  constructor(private products: ProductService, private users: UserService, private router: Router) { }
  id:any = ''
  name: string = ''
  cambio: boolean = false
  getAllProducts(): void {
    this.products.getAllProducts().subscribe(
      response => {
        this.allProducts = [...response.products]
        this.allProducts.forEach(product => {
          const fridgeValidation: boolean = this.isSaved(product.name, this.userProducts)
          product.isOnFridge =  fridgeValidation
        })
        this.allProducts.sort((a, b) => {
          if (a.isOnFridge === b.isOnFridge) {
            return a.name.localeCompare(b.name);
          } else {
            return a.isOnFridge ? -1 : 1;
          }
        })
        console.log(this.allProducts)
      },
      error => {
        console.log(error)
      }
    )
  }


  
  addIngredient(name:string): void {
    this.name = name
    this.users.addIngredient(this.id, this.name).subscribe(
      response => {
        const product = this.allProducts.find(x => x.name == name)
        product.isOnFridge = true
        const index = this.allProducts.findIndex(x => x.name == name)
        this.allProducts[index] = product
        this.allProducts.sort((a, b) => {
          if (a.isOnFridge === b.isOnFridge) {
            return a.name.localeCompare(b.name);
          } else {
            return a.isOnFridge ? -1 : 1;
          }
        })
      },
      error => {
        console.log(error)
      }
    )    
  }

  removeIngredient(name: string): void {
    this.name = name
    this.users.removeIngredient(this.id, this.name).subscribe(
      response => {
        const product = this.allProducts.find(x => x.name == name)
        product.isOnFridge = false
        const index = this.allProducts.findIndex(x => x.name == name)
        this.allProducts[index] = product
        this.allProducts.sort((a, b) => {
          if (a.isOnFridge === b.isOnFridge) {
            return a.name.localeCompare(b.name);
          } else {
            return a.isOnFridge ? -1 : 1;
          }
        })
      },
      error => {
        console.log(error)
      }
    )
  }

  getUserById(): void{
    this.users.getUser(this.id).subscribe(
      response => {
        this.userProducts = response.ingredients
      },
      error => {
        console.log(error)
      }
    )
  }

  cambiaso(event: any, name: string): void {
    console.log(event.target.checked)
    if (event.target.checked) {
      this.addIngredient(name)      
    } else {
      this.removeIngredient(name)
    }
    this.allProducts = this.allProducts.sort((x: any, y: any) => {
      return (x === y) ? 0 : -1    })
  }

  boolFunction(name: string): boolean {
    const validation: any = this.userProducts.find((x) => x == name)

    return validation
  }

  isSaved(name: string, ingredient:any[]): boolean {
    const validation: boolean = ingredient.find((x) => x == name) != undefined

    return validation
  }

  openModal(product: any): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }

  goToRecipesWithProductName(name: string): void{
    console.log(name)
    this.router.navigate(['/recipes-by-ingredient/', name.trim()])
  }
}
