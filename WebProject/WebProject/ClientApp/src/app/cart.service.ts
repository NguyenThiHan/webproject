import { Injectable, Output, EventEmitter } from '@angular/core';
import { Shoes } from './Model/Shoes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public sumPrice = 0;
  public countShoes = 0;
  public arrayshoes: Shoes[] = [];
  public current: number;
  public number: number;
  public flag = false;
  public wordSize: number;

  @Output() sum : EventEmitter<number> = new EventEmitter();
  @Output() countItem: EventEmitter<number> = new EventEmitter();
  //output ra 1 shoes
  @Output() arrayshoesItem: EventEmitter<Shoes[]> = new EventEmitter();
  //output ra gia tri ben ngoai;
  @Output() sumCurrent: EventEmitter<number> = new EventEmitter();
  @Output() numberCurrent: EventEmitter<number> = new EventEmitter();
  @Output() wordFind: EventEmitter<number> = new EventEmitter();

  constructor() { }

  countSum(shoes)
  {
    this.sumPrice = this.sumPrice + shoes.price;
    this.countShoes = this.arrayshoes.length;
    this.sum.emit(this.sumPrice);
    this.countItem.emit(this.countShoes);
  }
  pushShoesIntoArray(shoes)
  {
    if (this.arrayshoes.length == 0)
    {
      this.arrayshoes.push(shoes);
    }
    else
    {
      for (var i = 0; i <= this.arrayshoes.length; i++) {
        if (i == this.arrayshoes.length) {
          this.arrayshoes.push(shoes);
          break;
        }
        if (this.arrayshoes[i].id != shoes.id) {
          continue;
        }
        else {
          this.arrayshoes[i].number = this.arrayshoes[i].number + 1;
          break;
        }
      }
    }
  }

  //lay ra tong tien sau khi  1 sp bi xoa
  getCurrent(sum)
  {
    this.current = sum;
    this.sumCurrent.emit(this.current);
    this.sumPrice = this.current;
  }

  //lay ra so luong sp con lai sau khi bi xoa
  getNumber(count)
  {
    this.number = count;
    this.numberCurrent.emit(this.number);
    this.countShoes = this.number;
  }

  getinfoFind(number) {
    this.wordSize = number;
    this.wordFind.emit(this.wordSize);
  }
}
