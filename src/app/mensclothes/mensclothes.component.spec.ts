import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensclothesComponent } from './mensclothes.component';

describe('MensclothesComponent', () => {
  let component: MensclothesComponent;
  let fixture: ComponentFixture<MensclothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensclothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
