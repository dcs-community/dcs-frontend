import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Store } from '@ngxs/store';

import { UrlUtilsService } from '@dcs-libs/shared';
import { RecentCommentsComponent } from './recent-comments.component';
import { LimitTextPipe } from './limit-text.pipe';

class StoreStub {
  select = jest.fn();
}

class UrlUtilsServiceStub {
}

describe('RecentCommentsComponent', () => {
  let component: RecentCommentsComponent;
  let fixture: ComponentFixture<RecentCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentCommentsComponent, LimitTextPipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{provide: Store, useClass: StoreStub}, {provide: UrlUtilsService, useClass: UrlUtilsServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCommentsComponent);
    component = fixture.componentInstance;

    spyOn(component, 'ngOnInit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
