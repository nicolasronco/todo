import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ToDoListTileComponent } from './to-do-list-tile.component';

describe('ToDoListTileComponent', () => {
  let component: ToDoListTileComponent;
  let fixture: ComponentFixture<ToDoListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListTileComponent ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListTileComponent);
    component = fixture.componentInstance;
    component.toDo = {
      id: 1,
      title: 'Title test',
      description: 'Description test',
      createdDate: new Date(),
      modifiedDate: new Date(),
      isDone: false,
      isCrossedOut: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
