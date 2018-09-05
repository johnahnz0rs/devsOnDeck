import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrgDetailsComponent } from './home-org-details.component';

describe('HomeOrgDetailsComponent', () => {
  let component: HomeOrgDetailsComponent;
  let fixture: ComponentFixture<HomeOrgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOrgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOrgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
