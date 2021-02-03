import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../appServices/cocktail-service.service';

@Component({
  selector: 'app-cocktail-app',
  templateUrl: './cocktail-app.component.html',
  styleUrls: ['./cocktail-app.component.css']
})
export class CocktailAppComponent implements OnInit {
  products = [];
  uName: string = '';
  
  uIngredient: string ='';
  showGlass: boolean = false;
  showCategory: boolean = false;
  showIngredient: boolean = false;
  tableHeader:string = '';
  constructor(private _cocktaiServ: CocktailServiceService) { }

  ngOnInit() {
  }
  // searchByName(event) {
  //   this._cocktaiServ.cocktailByName(this.uName)
  //   .subscribe((data) => {
  //     console.log("data..",data)
  //       this.products = data.drinks;
  //   });
  // }
  // searchByCategory(event) {
  //   this._cocktaiServ.cocktailByCategory(this.uCategory)
  //   .subscribe((data) => {
  //     console.log(data)
  //       this.products = data.drinks;
  //   });
  // }
  // searchByIngredient(event) {
  //   this._cocktaiServ.cocktailByIngredient(this.uIngredient)
  //   .subscribe((data) => {
  //     console.log(data)
  //       this.products = data.drinks;
  //   });
  // }

  viewList(event) {
    if(event.target.value === 'g') {
      this.showGlass = true;
      this.showIngredient = false;
      this.showCategory = false;
      this.tableHeader = 'Glass'
    }
    if(event.target.value === 'c') {
      this.showCategory = true;
      this.showGlass = false;
      this.showIngredient = false;
      this.tableHeader = 'Category'
    }
    if(event.target.value === 'i') {
      this.showIngredient = true;
      this.showCategory = false;
      this.showGlass = false;
      this.tableHeader = 'Ingredients'
    }
    this._cocktaiServ.cocktailList(event.target.value)
    .subscribe((data) => {
        this.products = data.drinks;
    });
  }
}
