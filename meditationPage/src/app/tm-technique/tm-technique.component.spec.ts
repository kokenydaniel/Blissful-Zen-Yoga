import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmTechniqueComponent } from './tm-technique.component';

describe('TmTechniqueComponent', () => {
  let component: TmTechniqueComponent;
  let fixture: ComponentFixture<TmTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TmTechniqueComponent]
    });
    fixture = TestBed.createComponent(TmTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
