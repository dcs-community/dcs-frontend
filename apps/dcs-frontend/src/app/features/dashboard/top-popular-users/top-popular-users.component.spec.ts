import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngxs/store';

import { TopPopularUsersComponent } from './top-popular-users.component';

class StoreStub {
  select = jest.fn();
}

describe('TopPopularUsersComponent', () => {
  let component: TopPopularUsersComponent;
  let fixture: ComponentFixture<TopPopularUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopPopularUsersComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Store, useClass: StoreStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPopularUsersComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
