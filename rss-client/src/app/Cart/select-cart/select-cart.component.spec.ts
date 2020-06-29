import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCartComponent } from './select-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


fdescribe('SelectCartComponent', () => {
  let component: SelectCartComponent;
  let fixture: ComponentFixture<SelectCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [SelectCartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
