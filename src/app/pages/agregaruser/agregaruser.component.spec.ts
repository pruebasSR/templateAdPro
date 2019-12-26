import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaruserComponent } from './agregaruser.component';

describe('AgregaruserComponent', () => {
  let component: AgregaruserComponent;
  let fixture: ComponentFixture<AgregaruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
