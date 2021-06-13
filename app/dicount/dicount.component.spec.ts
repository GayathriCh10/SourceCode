import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicountComponent } from './dicount.component';

describe('DicountComponent', () => {
  let component: DicountComponent;
  let fixture: ComponentFixture<DicountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
