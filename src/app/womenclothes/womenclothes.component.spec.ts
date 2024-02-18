import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenclothesComponent } from './womenclothes.component';

describe('WomenclothesComponent', () => {
  let component: WomenclothesComponent;
  let fixture: ComponentFixture<WomenclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenclothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
