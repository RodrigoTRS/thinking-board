import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsCardComponent } from './thoughts-card.component';

describe('ThoughtsCardComponent', () => {
  let component: ThoughtsCardComponent;
  let fixture: ComponentFixture<ThoughtsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
