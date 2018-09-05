import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDevDetailsComponent } from './home-dev-details.component';

describe('HomeDevDetailsComponent', () => {
  let component: HomeDevDetailsComponent;
  let fixture: ComponentFixture<HomeDevDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDevDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDevDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
