import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product:Product;
  @Input('shopping-cart') shoppingCart:ShoppingCart;

  constructor(private shoppingCartService:ShoppingCartService) { }

  addToCart(){
   this.shoppingCartService.addToCart(this.product);
  }
 
  removeFromCart(){
   this.shoppingCartService.removeFromCart(this.product);
  }

  getQuantity(){
    if(!this.shoppingCart) return 0;

    let item=this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }
}
