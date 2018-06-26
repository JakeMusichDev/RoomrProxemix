import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationContainerComponent } from './destination-container.component';

describe('DestinationContainerComponent', () => {
  let component: DestinationContainerComponent;
  let fixture: ComponentFixture<DestinationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
