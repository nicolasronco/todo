import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ToDoContentComponent } from './to-do-content.component';

describe('ToDoContentComponent', () => {
  let component: ToDoContentComponent;
  let fixture: ComponentFixture<ToDoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoContentComponent ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
