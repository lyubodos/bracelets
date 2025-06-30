import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateonscrollbasicdemoComponent } from './animateonscrollbasicdemo.component';

describe('AnimateonscrollbasicdemoComponent', () => {
  let component: AnimateonscrollbasicdemoComponent;
  let fixture: ComponentFixture<AnimateonscrollbasicdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateonscrollbasicdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateonscrollbasicdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
