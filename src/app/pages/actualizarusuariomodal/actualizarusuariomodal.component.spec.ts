import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarusuariomodalComponent } from './actualizarusuariomodal.component';

describe('ActualizarusuariomodalComponent', () => {
  let component: ActualizarusuariomodalComponent;
  let fixture: ComponentFixture<ActualizarusuariomodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarusuariomodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarusuariomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
