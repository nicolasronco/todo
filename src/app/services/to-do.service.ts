import { Injectable } from '@angular/core';
import { injectMocks } from 'data-mocks';
import { Scenarios } from 'data-mocks/dist/types';
import { ToDo } from '../models/to-do.model';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  toDos: ToDo[] = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Because fridge is nearly empty !',
      createdDate: new Date(),
      isDone: false
    },
    {
      id: 2,
      title: 'Take vitamins',
      description: 'To stay healthy.',
      createdDate: new Date('August 11, 2022'),
      isDone: true
    },
    {
      id: 3,
      title: 'Learn Angular',
      description: 'Because it\'s the future !',
      createdDate: new Date('July 22, 2022'),
      isDone: false
    },
    {
      id: 4,
      title: 'Lunch with Sam',
      description: 'It\'s been a long time !',
      createdDate: new Date('July 29, 2022'),
      isDone: true
    }
  ];

  getAllToDos(): ToDo[] {
    return this.toDos;
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

}