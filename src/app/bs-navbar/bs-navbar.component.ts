//import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { async } from '@angular/core/testing';
//import { ShoppingCartService } from './../shopping-cart.service';
//import { AppUser } from './../models/app-users';
//import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { AppUser } from '../models/app-users';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit{ 
  appUser:AppUser;
  cart$:Observable<ShoppingCart>;

  constructor(
    private auth:AuthService,
    private shoppingCartService:ShoppingCartService
  )
  { 
  
  
  }

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);
    this.cart$ = await this.shoppingCartService.getcart();
  }

  logout(){
   this.auth.logout();
  }

}
