import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInvalidsComponent } from './log-invalids.component';

describe('LogInvalidsComponent', () => {
  let component: LogInvalidsComponent;
  let fixture: ComponentFixture<LogInvalidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInvalidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInvalidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
