import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ToDoListDetailedTileComponent } from './to-do-list-detailed-tile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToDoListDetailedTileComponent', () => {
  let component: ToDoListDetailedTileComponent;
  let fixture: ComponentFixture<ToDoListDetailedTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ ToDoListDetailedTileComponent ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListDetailedTileComponent);
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
