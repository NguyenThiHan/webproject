import { Injectable , Output,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoes } from './Model/Shoes';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  //Dau ra la 1 Shoes
 
  //khai bao http 
  constructor(private http: HttpClient) { }
  //cac link URL cua API
  private getKindShoesUrl = 'https://localhost:5001/api/Product/GetShoes/?codeType=';
  private getItemShoesUrl = 'https://localhost:5001/api/Product/GetItem/?id=';
  private findItemShoesUrl = 'https://localhost:5001/api/Product/FindItem/?codeType=';
  private findShoesUrl = 'https://localhost:5001/api/Product/FindItemShoes/?sizeList=';

  //lay tat ca cac giay cung 1 loai
  getKindShoes(codeType): Observable<Shoes[]>
  {
    return this.http.get<Shoes[]>(this.getKindShoesUrl + codeType);
  }
  //lay 1 doi giay theo ma
  getItemShoes(id): Observable<Shoes> {
    return this.http.get<Shoes>(this.getItemShoesUrl + id);
  }
  //Find Item Shoes

  findItemShoes(id,size): Observable<Shoes[]> 
  {
    return this.http.get<Shoes[]>(this.findItemShoesUrl + id + "&sizeList=" + size);
  }

  findShoes(size): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(this.findShoesUrl + size);
  }

}
