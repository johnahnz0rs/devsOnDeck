import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDevsComponent } from './show-devs.component';

describe('ShowDevsComponent', () => {
  let component: ShowDevsComponent;
  let fixture: ComponentFixture<ShowDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
