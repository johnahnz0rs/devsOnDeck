import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSuliComponent } from './dev-suli.component';

describe('DevSuliComponent', () => {
  let component: DevSuliComponent;
  let fixture: ComponentFixture<DevSuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevSuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevSuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
