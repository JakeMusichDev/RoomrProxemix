import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationBlockComponent } from './destination-block.component';

describe('DestinationBlockComponent', () => {
  let component: DestinationBlockComponent;
  let fixture: ComponentFixture<DestinationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
