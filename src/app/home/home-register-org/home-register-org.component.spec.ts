import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterOrgComponent } from './home-register-org.component';

describe('HomeRegisterOrgComponent', () => {
  let component: HomeRegisterOrgComponent;
  let fixture: ComponentFixture<HomeRegisterOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRegisterOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRegisterOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
