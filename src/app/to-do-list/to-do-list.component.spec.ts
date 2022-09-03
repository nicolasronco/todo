import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ToDoListComponent } from './to-do-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { IsDonePipe } from '../is-done.pipe';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule, RouterTestingModule ],
      declarations: [ ToDoListComponent, IsDonePipe ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    component.toDos = [{
      id: 1,
      title: 'Title test',
      description: 'Description test',
      createdDate: new Date(),
      modifiedDate: new Date(),
      isDone: false,
      isCrossedOut: false
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
