import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgShowJobsComponent } from './org-show-jobs.component';

describe('OrgShowJobsComponent', () => {
  let component: OrgShowJobsComponent;
  let fixture: ComponentFixture<OrgShowJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgShowJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgShowJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
