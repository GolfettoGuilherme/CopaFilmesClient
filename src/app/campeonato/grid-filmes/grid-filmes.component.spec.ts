import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFilmesComponent } from './grid-filmes.component';

describe('GridFilmesComponent', () => {
  let component: GridFilmesComponent;
  let fixture: ComponentFixture<GridFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
