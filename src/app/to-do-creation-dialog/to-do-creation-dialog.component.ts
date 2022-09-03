import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToDoService } from '../services/to-do.service';
import { addToDoItem } from '../state/to-do.actions';

@Component({
  selector: 'app-to-do-creation-dialog',
  templateUrl: './to-do-creation-dialog.component.html',
  styleUrls: ['./to-do-creation-dialog.component.scss']
})
export class ToDoCreationDialogComponent implements OnInit {
  isPosting: boolean = false;
  titleFormControl = new FormControl('', [Validators.required]);
  descriptionFormControl = new FormControl('', []);

  constructor(public dialogRef: MatDialogRef<ToDoCreationDialogComponent>,
    private toDoService: ToDoService,
    private store: Store
  ) { }

  ngOnInit(): void { }

  onAddItem(): void {
    const title = this.titleFormControl.value
    const description = this.descriptionFormControl.value;

    if (title) {
      this.isPosting = true;
      this.toDoService.postToDo(title, description || '')
        .then((toDo) => {
          this.store.dispatch(addToDoItem({ toDo }));
          this.isPosting = false;
          this.dialogRef.close();
        });
    }
  }
}
