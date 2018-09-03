import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgShowOrgsComponent } from './org-show-orgs.component';

describe('OrgShowOrgsComponent', () => {
  let component: OrgShowOrgsComponent;
  let fixture: ComponentFixture<OrgShowOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgShowOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgShowOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
