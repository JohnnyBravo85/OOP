import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammalComponent } from './mammal.component';

describe('MammalComponent', () => {
  let component: MammalComponent;
  let fixture: ComponentFixture<MammalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
