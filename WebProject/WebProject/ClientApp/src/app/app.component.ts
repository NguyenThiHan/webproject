import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { ShoesService } from './shoes.service';
import { Shoes } from './Model/Shoes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';

  public result = 0;
  public countItem = 0;
  public wordfind: number;

  constructor(private cartService: CartService, private shoesService: ShoesService)
  { }

  ngOnInit()
  {
    this.cartService.sum.subscribe(result => {
      this.result = result;
    });
    this.cartService.sumCurrent.subscribe(current =>{
      this.result = current; 
    });

    this.cartService.countItem.subscribe(countItem => {
      this.countItem = countItem ;
    });
    this.cartService.numberCurrent.subscribe(current => {
      this.countItem = current;
    });
  }

  findShoesItem()
  {
    this.cartService.getinfoFind(this.wordfind);
  }
}

