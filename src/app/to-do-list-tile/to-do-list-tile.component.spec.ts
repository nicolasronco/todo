import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListTileComponent } from './to-do-list-tile.component';

describe('ToDoListTileComponent', () => {
  let component: ToDoListTileComponent;
  let fixture: ComponentFixture<ToDoListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
