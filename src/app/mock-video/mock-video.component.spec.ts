import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockVideoComponent } from './mock-video.component';

describe('MockVideoComponent', () => {
  let component: MockVideoComponent;
  let fixture: ComponentFixture<MockVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
