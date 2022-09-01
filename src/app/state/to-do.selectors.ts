import { createSelector, createFeatureSelector } from "@ngrx/store";

export const getToDoListState = createFeatureSelector('toDoList');

export const getToDos = createSelector(
  getToDoListState,
  (state: any) => state.toDos
);