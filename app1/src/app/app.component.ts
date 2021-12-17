import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="";
  price ="";
  description="";
  
  products = []
  
  constructor(private service : ProductService){
    this.loadProducts()
  }
   
 
    
    loadProducts(){
       this.service.getProducts().subscribe((response:any) =>{
        if(response['status'] == 'success'){
           this.products = response['data']
           console.log(this.products)
        }
           })
    }
    
  


  save(){
    this.service
    .addProduct(this.title,this.description,this.price)
    .subscribe((response:any) =>{
      if(response['status'] == 'success'){
         console.log('done');
      }

      this.cancel();
      this.loadProducts()
    })
  }
  cancel(){
    this.title = ''
    this.description = ''
    this.price = '0'
  }
}
