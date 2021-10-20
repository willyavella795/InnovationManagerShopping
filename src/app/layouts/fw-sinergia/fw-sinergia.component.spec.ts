import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwSinergiaComponent } from './fw-sinergia.component';

describe('FwSinergiaComponent', () => {
  let component: FwSinergiaComponent;
  let fixture: ComponentFixture<FwSinergiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwSinergiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwSinergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
