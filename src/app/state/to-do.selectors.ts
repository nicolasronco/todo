import { createSelector, createFeatureSelector } from "@ngrx/store";

export const getToDoListState = createFeatureSelector('toDoList');

export const getToDos = createSelector(
  getToDoListState,
  (state: any) => state.toDos
);

export const hasBeenFetched = createSelector(
  getToDoListState,
  (state: any) => state.hasBeenFetched
);
