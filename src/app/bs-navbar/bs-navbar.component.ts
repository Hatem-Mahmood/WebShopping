//import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { async } from '@angular/core/testing';
//import { ShoppingCartService } from './../shopping-cart.service';
//import { AppUser } from './../models/app-users';
//import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit{ 
 // appUser:AppUser;
  //cart$:Observable<ShoppingCart>;

 /* constructor(
    private auth:AuthService,
    private shoppingCartService:ShoppingCartService
  )*/ 
  constructor()
  { 
  
  
  }

  async ngOnInit(){
   // this.auth.appUser$.subscribe(appUser=>this.appUser=appUser);
   // this.cart$ = await this.shoppingCartService.getcart();
  }

  logout(){
   //this.auth.logout();
  }

}
