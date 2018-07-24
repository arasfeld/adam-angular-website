import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyPlayedGameListComponent } from './recently-played-game-list.component';

describe('RecentlyPlayedGameListComponent', () => {
  let component: RecentlyPlayedGameListComponent;
  let fixture: ComponentFixture<RecentlyPlayedGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyPlayedGameListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyPlayedGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
