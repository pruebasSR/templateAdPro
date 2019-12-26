import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosusuariomodalComponent } from './datosusuariomodal.component';

describe('DatosusuariomodalComponent', () => {
  let component: DatosusuariomodalComponent;
  let fixture: ComponentFixture<DatosusuariomodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosusuariomodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosusuariomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
