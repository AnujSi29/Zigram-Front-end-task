import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailServiceService } from '../appServices/cocktail-service.service';
@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {
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
    this._cocktaiServ.cocktailByGlass(this.id)
     .subscribe((data) => {
         this.products = data.drinks;
     });
  }

}
