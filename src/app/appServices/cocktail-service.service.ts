import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  constructor(private http: HttpClient) { }

  cocktailList(p): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php', {params : new HttpParams().set(p,'list')})
  }
  cocktailByCategory(p): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {params : new HttpParams().set('c',p)})
  }
  cocktailByGlass(p): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {params : new HttpParams().set('g',p)})
  }
  cocktailByIngredient(p): Observable<any> {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {params : new HttpParams().set('i',p)})
  }
}