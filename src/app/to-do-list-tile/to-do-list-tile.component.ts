import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { ToDo } from '../models/to-do.model';
import { setToDone } from '../state/to-do.actions';
import { getToDos } from '../state/to-do.selectors';

@Component({
  selector: 'app-to-do-list-tile',
  templateUrl: './to-do-list-tile.component.html',
  styleUrls: ['./to-do-list-tile.component.scss']
})
export class ToDoListTileComponent implements OnInit {

  @Input() toDo!: ToDo;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void { }

  onToggle(event: MatSlideToggleChange) {
    this.store.dispatch(setToDone({ toDoId: this.toDo.id, isDone: event.checked  }))
  }

  onSeeDetails() {
    this.router.navigateByUrl(`todos/${this.toDo.id}`);
  }

}
