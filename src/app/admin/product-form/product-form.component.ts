import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$
  product={};
  id;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    CategoryService:CategoryService,
    private productService:ProductService) { 
    this.categories$=CategoryService.getCategories();

     this.id=this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.getProduct(this.id).take(1).subscribe(p=>this.product=p);
  }

  save(product){
   if(this.id) this.productService.updateProduct(this.id,product);
   else this.productService.create(product);
   this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete thid product?')) return;
       
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
    
  }

  ngOnInit() {
  }

}
