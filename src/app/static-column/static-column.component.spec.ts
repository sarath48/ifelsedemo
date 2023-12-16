import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticColumnComponent } from './static-column.component';

describe('StaticColumnComponent', () => {
  let component: StaticColumnComponent;
  let fixture: ComponentFixture<StaticColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
