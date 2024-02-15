import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeModalComponent } from './exclude-modal.component';

describe('ExcludeModalComponent', () => {
  let component: ExcludeModalComponent;
  let fixture: ComponentFixture<ExcludeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcludeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcludeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
