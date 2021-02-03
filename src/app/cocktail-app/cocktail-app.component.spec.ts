import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailAppComponent } from './cocktail-app.component';

describe('CocktailAppComponent', () => {
  let component: CocktailAppComponent;
  let fixture: ComponentFixture<CocktailAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
