import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookheaderComponent } from './bookheader.component';

describe('BookheaderComponent', () => {
  let component: BookheaderComponent;
  let fixture: ComponentFixture<BookheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
