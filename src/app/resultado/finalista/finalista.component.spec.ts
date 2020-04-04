import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalistaComponent } from './finalista.component';

describe('FinalistaComponent', () => {
  let component: FinalistaComponent;
  let fixture: ComponentFixture<FinalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
