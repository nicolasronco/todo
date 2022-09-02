import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../models/to-do.model';
import { setToDone } from '../state/to-do.actions';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-list-detailed-tile',
  templateUrl: './to-do-list-detailed-tile.component.html',
  styleUrls: ['./to-do-list-detailed-tile.component.scss']
})
export class ToDoListDetailedTileComponent implements OnInit {
  toDo!: ToDo;

  constructor(private store: Store, private route: ActivatedRoute,
    private toDoService: ToDoService, private router: Router
  ) { }

  ngOnInit(): void {
    const toDoId = +this.route.snapshot.params['id'];
    this.toDo = this.toDoService.getToDoById(toDoId);
    // Maybe use a selector ?
  }

  onToggle(event: MatSlideToggleChange) {
    this.store.dispatch(setToDone({ toDoId: this.toDo.id, isDone: event.checked  }))
  }

  goToList() {
    this.router.navigateByUrl('/todos');
  }

}
