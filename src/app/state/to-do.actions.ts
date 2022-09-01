import { createAction, props } from "@ngrx/store";
import { ToDo } from "../models/to-do.model";

export const fetchedToDos = createAction(
  '[ToDo List/API] Fetch ToDo List Success',
  props<{ toDos: ToDo[] }>()
);

export const setToDone = createAction(
  '[ToDo List] Update isDone attribute on ToDo',
  props<{ toDoId: number, isDone: boolean }>()
);
