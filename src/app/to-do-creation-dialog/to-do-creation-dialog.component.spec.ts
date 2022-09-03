import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef  } from '@angular/material/dialog';
import { ToDoCreationDialogComponent } from './to-do-creation-dialog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('ToDoCreationDialogComponent', () => {
  let component: ToDoCreationDialogComponent;
  let fixture: ComponentFixture<ToDoCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatDialogModule , RouterTestingModule ],
      declarations: [ ToDoCreationDialogComponent ],
      providers: [
        provideMockStore(),
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check init values', () => {
    expect(component.isPosting).toBe(false);
    expect(component.titleFormControl).toBeDefined();
    expect(component.descriptionFormControl).toBeDefined();
  });
});
