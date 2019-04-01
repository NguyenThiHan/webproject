import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Shoes } from '../Model/Shoes';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  public shoesDetail: Shoes[];
  public shoes: Shoes;

  public sumPrice: number;
  public index: number;
  public count: number;
  public sumUpdate: number;

  public number: number;

  constructor(private cartService: CartService) { }

  ngOnInit()
  {
    this.shoesDetail = this.cartService.arrayshoes;
    this.sumPrice = this.cartService.sumPrice;
    this.count = this.cartService.countShoes;
  }


  delete(shoes) {
    this.shoes = shoes;
    this.index = this.shoesDetail.indexOf(this.shoes);
    if (this.index != -1) {
      this.shoesDetail.splice(this.index, 1);
      this.shoesDetail;
      this.sumPrice = this.sumPrice - (this.shoes.price * this.shoes.number);
      this.count = this.count - 1;
      this.cartService.getCurrent(this.sumPrice);
      this.cartService.getNumber(this.count);
    }
  }

  updateNumber(event: any)
  {
    this.sumUpdate = 0;
    this.number = 0;
    for (var i = 0; i < this.shoesDetail.length ; i++)
    {
      this.sumUpdate = this.sumUpdate + (this.shoesDetail[i].price * this.shoesDetail[i].number);
    }
    this.sumPrice = this.sumUpdate;
    this.cartService.getCurrent(this.sumPrice);
  }
}
