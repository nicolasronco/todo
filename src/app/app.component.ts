import { Component } from '@angular/core';
import { ToDoService } from './services/to-do.service';
import { Store } from '@ngrx/store';
import { fetchedToDos } from './state/to-do.actions';
import { getToDoListState, getToDos } from './state/to-do.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  /* toDos: ToDo[] = []; */
  toDos: any = [];

  constructor(private toDoService: ToDoService, private store: Store) {

  }

  ngOnInit() {
    this.toDoService.fetchToDos()
      .then(toDos => {
        this.toDos = toDos;
        this.store.dispatch(fetchedToDos({ toDos }));
        /* this.store.select(getToDoListState).subscribe((test) => console.log(test));
        this.store.select(getToDos).subscribe((test) => console.log(test)); */
      });
  }
}
