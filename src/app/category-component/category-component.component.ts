import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailServiceService } from '../appServices/cocktail-service.service';
@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.css']
})
export class CategoryComponentComponent implements OnInit {
  id: string = '';
  products = [];
  constructor(private _cocktaiServ: CocktailServiceService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('name');
      this.changeData()
  });
  }
  changeData() {
    this._cocktaiServ.cocktailByCategory(this.id)
     .subscribe((data) => {
         this.products = data.drinks;
     });
  }
}
