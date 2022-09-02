import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCreationDialogComponent } from './to-do-creation-dialog.component';

describe('ToDoCreationDialogComponent', () => {
  let component: ToDoCreationDialogComponent;
  let fixture: ComponentFixture<ToDoCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoCreationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
