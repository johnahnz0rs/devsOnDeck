import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgShowProfileComponent } from './org-show-profile.component';

describe('OrgShowProfileComponent', () => {
  let component: OrgShowProfileComponent;
  let fixture: ComponentFixture<OrgShowProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgShowProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgShowProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
