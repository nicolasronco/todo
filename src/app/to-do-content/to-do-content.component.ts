import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Store } from '@ngrx/store';
import { fetchedToDos } from '../state/to-do.actions';

@Component({
  selector: 'app-to-do-content',
  templateUrl: './to-do-content.component.html',
  styleUrls: ['./to-do-content.component.scss']
})
export class ToDoContentComponent implements OnInit {
  toDos: any = [];

  constructor(private toDoService: ToDoService, private store: Store) { }

  ngOnInit(): void {
    this.toDoService.fetchToDos()
      .then(toDos => {
        this.toDos = toDos;
        this.store.dispatch(fetchedToDos({ toDos }));
      });
  }

}
