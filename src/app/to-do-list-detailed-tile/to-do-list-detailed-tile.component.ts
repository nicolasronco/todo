import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../models/to-do.model';
import { setToDone } from '../state/to-do.actions';
import { ToDoService } from '../services/to-do.service';
import { fetchedToDos } from '../state/to-do.actions';
import { getToDos, hasBeenFetched } from '../state/to-do.selectors';

@Component({
  selector: 'app-to-do-list-detailed-tile',
  templateUrl: './to-do-list-detailed-tile.component.html',
  styleUrls: ['./to-do-list-detailed-tile.component.scss']
})
export class ToDoListDetailedTileComponent implements OnInit {
  toDo!: ToDo
  isToDoDone!: boolean;
  hasBeenFetched: boolean = false;

  constructor(private store: Store, private route: ActivatedRoute,
    private toDoService: ToDoService, private router: Router
  ) { }

  ngOnInit(): void {
    const toDoId = +this.route.snapshot.params['id'];

    this.store.select(hasBeenFetched)
      .subscribe((hasToDosBeenFetched) => {
        this.hasBeenFetched = hasToDosBeenFetched;
        if (hasToDosBeenFetched) {
          this.store.select(getToDos)
            .subscribe((toDos) => {
              this.toDo = toDos.find((toDoElt: ToDo) => toDoElt.id === toDoId);
              this.isToDoDone = this.toDo.isDone;
            });
        } else {
          this.toDoService.fetchToDos()
            .then(toDos => {
              let toDo = toDos.find((toDoElt: ToDo) => toDoElt.id === toDoId);
              if (toDo) {
                this.toDo = toDo;
                this.isToDoDone = this.toDo.isDone;
                this.store.dispatch(fetchedToDos({ toDos }));
              } else {
                throw new Error('To do list not found !');
              }
            });
        }
      });
  }

  onToggle(event: MatSlideToggleChange) {
    this.store.dispatch(setToDone({ toDoId: this.toDo.id, isDone: event.checked  }))
  }

  goToList() {
    this.router.navigateByUrl('/todos');
  }

}
