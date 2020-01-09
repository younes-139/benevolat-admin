import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecompenseComponent } from './ajouter-recompense.component';

describe('AjouterRecompenseComponent', () => {
  let component: AjouterRecompenseComponent;
  let fixture: ComponentFixture<AjouterRecompenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterRecompenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
