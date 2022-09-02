import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToDoCreationDialogComponent } from '../to-do-creation-dialog/to-do-creation-dialog.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() toDos!: ToDo[];

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void { }

  goToHomePage() {
    this.router.navigateByUrl('');
  }

  displayForm() {
    this.dialog.open(ToDoCreationDialogComponent, {
      width: '450px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms'
    });
  }

}