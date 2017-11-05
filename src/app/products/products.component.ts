import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  filterProducts:Product[]=[]; 
  category:string;
  cart$:Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    private shoppingCartService:ShoppingCartService
    ) { }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getcart();
    this.populateProducts();   
  }

  private populateProducts(){
     this.productService.getAll()
    .switchMap(products=>{
      this.products=products;
      return this.route.queryParamMap;
    })
     .subscribe(params =>{
      this.category=params.get('category');
      this.applayFilter();    
    });
  }

  private applayFilter(){
    this.filterProducts=(this.category)?
      this.products.filter(p=>p.category===this.category):
      this.products;
  }

}
