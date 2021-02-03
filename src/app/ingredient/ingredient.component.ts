import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailServiceService } from '../appServices/cocktail-service.service';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
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
    this._cocktaiServ.cocktailByIngredient(this.id)
     .subscribe((data) => {
       console.log("data..",data)
         this.products = data.drinks;
     });
  }
}
