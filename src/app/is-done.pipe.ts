import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/to-do.model';

@Pipe({
  name: 'isDone'
})
export class IsDonePipe implements PipeTransform {

  transform(toDos: ToDo[]): ToDo[] {
    let toDosToSort = [...toDos];
    toDosToSort.sort((a: ToDo, b: ToDo) => {

      if (a.isDone && b.isDone) {
        return this.compareDate(a.modifiedDate.toString(), b.modifiedDate.toString());
      } else if (!a.isDone && !b.isDone) {
        if (a.isCrossedOut) {
          if (b.isCrossedOut) {
            return this.compareDate(a.modifiedDate.toString(), b.modifiedDate.toString());
          } else { // !b.isCrossedOut
            return 1;
          }
        } else { //!a.isCrossedOut
          if (b.isCrossedOut) {
            return -1;
          } else {
            return this.compareDate(a.modifiedDate.toString(), b.modifiedDate.toString());
          }
        }
      } else if (!a.isDone && b.isDone) {
          if (a.isCrossedOut) {
            return 1;
          } else {
            return -1;
          }
      } else { // a.isDone && !b.isDone
        if (b.isCrossedOut) {
          return -1;
        } else {
          return 1;
        }
      }
    })

    return toDosToSort;
  }

  compareDate(stringDate1: string, stringDate2: string): number {
    return new Date(stringDate2).getTime() - new Date(stringDate1).getTime();
  }

}
