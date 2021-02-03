import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailAppComponent } from './cocktail-app/cocktail-app.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponentComponent } from './category-component/category-component.component';
import { GlassComponent } from './glass/glass.component';
import { IngredientComponent } from './ingredient/ingredient.component';

const appRoutes: Routes = [
  // {path:'',component: CocktailAppComponent},
  {path:'category/:name',component: CategoryComponentComponent},
  {path:'glass/:name',component: GlassComponent},
  {path:'ingredient/:name',component: IngredientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CocktailAppComponent,
    CategoryComponentComponent,
    GlassComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
