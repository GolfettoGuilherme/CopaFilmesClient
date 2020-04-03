import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoGerarCampeonatoComponent } from './botao-gerar-campeonato.component';

describe('BotaoGerarCampeonatoComponent', () => {
  let component: BotaoGerarCampeonatoComponent;
  let fixture: ComponentFixture<BotaoGerarCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoGerarCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoGerarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
