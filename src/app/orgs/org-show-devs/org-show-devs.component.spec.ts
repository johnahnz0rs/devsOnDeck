import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgShowDevsComponent } from './org-show-devs.component';

describe('OrgShowDevsComponent', () => {
  let component: OrgShowDevsComponent;
  let fixture: ComponentFixture<OrgShowDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgShowDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgShowDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
