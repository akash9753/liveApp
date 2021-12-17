import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:4000/product'
  constructor( 
    private httpClient: HttpClient
  ) { }

  getProducts(){
       return this.httpClient.get(this.url)
  }
  addProduct(title:string, description:string,price:string){
    const body = {
      title, 
      description, 
      price
    }    
    return this.httpClient.post(this.url + `/create`, body)
  }
}
