import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAddJobComponent } from './org-add-job.component';

describe('OrgAddJobComponent', () => {
  let component: OrgAddJobComponent;
  let fixture: ComponentFixture<OrgAddJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgAddJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAddJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
