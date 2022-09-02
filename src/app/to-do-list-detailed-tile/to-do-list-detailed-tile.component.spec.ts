import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDetailedTileComponent } from './to-do-list-detailed-tile.component';

describe('ToDoListDetailedTileComponent', () => {
  let component: ToDoListDetailedTileComponent;
  let fixture: ComponentFixture<ToDoListDetailedTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListDetailedTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListDetailedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
