import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [RouterLink, FormsModule, NavbarComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})


export class CreateProductComponent {
  perishableSelected: boolean = false
  vegetarianSelected: boolean = false
  product = {
    imageurl: '',
    name: '',
    type: '',
    description: '',
    conservation: '',
    vegetarian: false,
    perishable: false
  };

  constructor(private productservice:ProductService) { }

  onSubmit() {
    this.productservice.createProduct(this.product).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  onVegetarianChange(event: Event) {
    this.vegetarianSelected = !this.vegetarianSelected
    this.product.vegetarian = this.vegetarianSelected
  }


  onPerishableChange(event: Event) {
    this.perishableSelected = !this.perishableSelected
    this.product.perishable = this.perishableSelected
  }
}
