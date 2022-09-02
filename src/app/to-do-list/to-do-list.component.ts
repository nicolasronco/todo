import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../models/to-do.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() toDos!: ToDo[];
  /* object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]); */

  constructor(private router: Router) { }

  ngOnInit(): void { }

  goToHomePage() {
    this.router.navigateByUrl('');
  }

}