import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterDevComponent } from './home-register-dev.component';

describe('HomeRegisterDevComponent', () => {
  let component: HomeRegisterDevComponent;
  let fixture: ComponentFixture<HomeRegisterDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegisterDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegisterDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
