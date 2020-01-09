import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecompenseComponent } from './list-recompense.component';

describe('ListRecompenseComponent', () => {
  let component: ListRecompenseComponent;
  let fixture: ComponentFixture<ListRecompenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecompenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
