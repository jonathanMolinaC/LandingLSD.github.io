import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESectionComponent } from './esection.component';

describe('ESectionComponent', () => {
  let component: ESectionComponent;
  let fixture: ComponentFixture<ESectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ESectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ESectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
