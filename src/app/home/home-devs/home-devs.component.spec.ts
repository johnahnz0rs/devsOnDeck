import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDevsComponent } from './home-devs.component';

describe('HomeDevsComponent', () => {
  let component: HomeDevsComponent;
  let fixture: ComponentFixture<HomeDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
