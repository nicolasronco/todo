import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-to-do-creation-dialog',
  templateUrl: './to-do-creation-dialog.component.html',
  styleUrls: ['./to-do-creation-dialog.component.scss']
})
export class ToDoCreationDialogComponent implements OnInit {
  titleFormControl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<ToDoCreationDialogComponent>) { }

  ngOnInit(): void { }
}
