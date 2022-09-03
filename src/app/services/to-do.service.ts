import { Injectable } from '@angular/core';
import { injectMocks } from 'data-mocks';
import { Scenarios } from 'data-mocks/dist/types';
import { ToDo } from '../models/to-do.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  getAllToDos(): ToDo[] {
    return this.toDos;
  }

  getToDoById(toDoId: number): ToDo {
    const toDo = this.toDos.find(toDoElt => toDoElt.id === toDoId);
    if (toDo) {
      return toDo;
    } else {
      throw new Error('ToDo not found !')
    }
  }

  async postToDo(title: string, description: string): Promise<ToDo> {
    const newToDoItem: ToDo = {
      id: this.toDos.length + 1,
      title,
      description,
      createdDate: new Date(),
      modifiedDate: new Date(),
      isDone: false,
      isCrossedOut: false
    };

    const scenarios: Scenarios = {
      default: [
        {
          url: /my-todos/,
          method: 'POST',
          response: newToDoItem,
          responseCode: 201,
          delay: 1000
        }
      ]
    };

    injectMocks(scenarios);

    const res = await axios.post('https://foo.d/my-todos', { method: 'POST' });
    const toDo = res.data;

    return toDo;
  }

  async fetchToDos(): Promise<ToDo[]> {
    const scenarios: Scenarios = {
      default: [
        {
          url: /my-todos/,
          method: 'GET',
          response: this.getAllToDos(),
          responseCode: 200,
          delay: 500
        }
      ]
    };

    injectMocks(scenarios);

    const res = await fetch('https://foo.d/my-todos', { method: 'GET' });
    const toDos = res.json();
    return toDos;
  }

  toDos: ToDo[] = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Because fridge is nearly empty !',
      createdDate: new Date('September 1, 2022'),
      modifiedDate: new Date('September 1, 2022'),
      isDone: true,
      isCrossedOut: false
    },
    {
      id: 2,
      title: 'Learn Angular',
      description: 'Because it\'s the future !',
      createdDate: new Date('August 11, 2022'),
      modifiedDate: new Date('August 11, 2022'),
      isDone: false,
      isCrossedOut: false
    },
    {
      id: 3,
      title: 'Take vitamins',
      description: 'To stay healthy.',
      createdDate: new Date('July 22, 2022'),
      modifiedDate: new Date('July 22, 2022'),
      isDone: false,
      isCrossedOut: true
    },
    {
      id: 4,
      title: 'Lunch with Sam',
      description: 'It\'s been a long time !',
      createdDate: new Date('July 29, 2022'),
      modifiedDate: new Date('July 29, 2022'),
      isDone: true,
      isCrossedOut: false
    }
  ];

}