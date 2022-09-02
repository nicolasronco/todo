import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/to-do.model';

@Pipe({
  name: 'isDone'
})
export class IsDonePipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(toDos: ToDo[]): ToDo[] {
    let toDosToSort = [...toDos];
    toDosToSort.sort((a: ToDo, b: ToDo) => {
      if (a.isDone && b.isDone) {
        return 0;
      } else if (a.isDone) {
        return -1;
      } else {
        return 1;
      }
    });

    return toDosToSort;
  }

}
