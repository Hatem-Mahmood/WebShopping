import { ShoppingCart } from './../models/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shopping-cart-summry',
  templateUrl: './shopping-cart-summry.component.html',
  styleUrls: ['./shopping-cart-summry.component.css']
})
export class ShoppingCartSummryComponent  {

  @Input('cart') cart :ShoppingCart;
}
