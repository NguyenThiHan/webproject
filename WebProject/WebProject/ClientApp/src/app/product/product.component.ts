import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { Shoes } from '../Model/Shoes';
import { CartService } from '../cart.service';

 @Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
 export class ProductComponent implements OnInit
 {
   //danh sach shoes
   public listShoes: Shoes[];
   //tao 1 shoes
   public shoes: Shoes;
   //tao 1 id shoes
   //public idShoes: number;
   public number: number;

   //@Output() idShoes: EventEmitter<number> = new EventEmitter();
   //khai bao service de su dung
   constructor(private service: ShoesService, private cartService: CartService)
   { }

   //cac function de goi su ly
   ngOnInit()
   {

     //lay mac dinh la loai 1 se hien ra truoc
     this.getProductKind(1);
     //  this.findShoesItem(1);
     //  this.findShoesItem(2);
     //  this.findShoesItem(3);
     //}

   }

   getProductKind(id)
   {
     this.service.getKindShoes(id).subscribe(listShoes => this.listShoes = listShoes);
   }

   //lay 1 chiec giay có id

   findShoesItem(id)
   {
     this.number = this.cartService.wordSize;
     //this.cartService.wordFind.subscribe(number => this.number = number);
     this.service.findItemShoes(id, this.number).subscribe(listShoes => this.listShoes = listShoes);
     //this.service.findShoes(this.number).subscribe(listShoes => this.listShoes = listShoes);
   }

   //function lay id
   addShoes(shoes)
   {
     this.shoes = shoes;
     //this.service.getItemShoes(this.idShoes).subscribe(shoes => this.shoes = shoes);
     this.shoes.number = 1;
     this.cartService.pushShoesIntoArray(this.shoes);
     this.shoes.total = this.shoes.price * this.shoes.number;
     this.cartService.countSum(this.shoes);
   }
}
