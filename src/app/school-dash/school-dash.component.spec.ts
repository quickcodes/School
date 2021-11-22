import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDashComponent } from './school-dash.component';

describe('SchoolDashComponent', () => {
  let component: SchoolDashComponent;
  let fixture: ComponentFixture<SchoolDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
