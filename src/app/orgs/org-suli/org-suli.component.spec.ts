import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSuliComponent } from './org-suli.component';

describe('OrgSuliComponent', () => {
  let component: OrgSuliComponent;
  let fixture: ComponentFixture<OrgSuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
