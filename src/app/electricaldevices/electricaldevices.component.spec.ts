import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricaldevicesComponent } from './electricaldevices.component';

describe('ElectricaldevicesComponent', () => {
  let component: ElectricaldevicesComponent;
  let fixture: ComponentFixture<ElectricaldevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricaldevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricaldevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
