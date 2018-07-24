import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedGameListComponent } from './owned-game-list.component';

describe('OwnedGameListComponent', () => {
  let component: OwnedGameListComponent;
  let fixture: ComponentFixture<OwnedGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnedGameListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
