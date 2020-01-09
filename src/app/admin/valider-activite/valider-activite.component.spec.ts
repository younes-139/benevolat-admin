import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderActiviteComponent } from './valider-activite.component';

describe('ValiderActiviteComponent', () => {
  let component: ValiderActiviteComponent;
  let fixture: ComponentFixture<ValiderActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
