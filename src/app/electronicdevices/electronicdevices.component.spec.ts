import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicdevicesComponent } from './electronicdevices.component';

describe('ElectronicdevicesComponent', () => {
  let component: ElectronicdevicesComponent;
  let fixture: ComponentFixture<ElectronicdevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicdevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicdevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
