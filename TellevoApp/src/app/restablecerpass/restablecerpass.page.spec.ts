import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerpassPage } from './restablecerpass.page';

describe('RestablecerpassPage', () => {
  let component: RestablecerpassPage;
  let fixture: ComponentFixture<RestablecerpassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablecerpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
