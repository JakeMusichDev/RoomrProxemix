import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceListContainerComponent } from './distance-list-container.component';

describe('DistanceListContainerComponent', () => {
  let component: DistanceListContainerComponent;
  let fixture: ComponentFixture<DistanceListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
