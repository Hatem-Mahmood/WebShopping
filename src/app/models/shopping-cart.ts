import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
    items:ShoppingCartItem[]=[];

    constructor(private itemsMap:{[productId:string]:ShoppingCartItem}){
        this.itemsMap=itemsMap|| {};
        for(let productId in itemsMap){
            let item=itemsMap[productId];           
            this.items.push(new ShoppingCartItem({ ...item, $key:productId }));
        }
     }

    get productIds(){
        return Object.keys(this.itemsMap);
    }

    get totalprice(){
        let sum=0;
        for(let productId in this.items)
        sum+=this.items[productId].totalprice;
        return sum;
    }

    get totalItemCount(){
        let Count=0;
        for(let productid in this.itemsMap)
          Count+=this.itemsMap[productid].quantity;
          return Count;
    }

    getQuantity(product:Product){  
        let item=this.itemsMap[product.$key];
        return item ? item.quantity : 0;
      }
    
}