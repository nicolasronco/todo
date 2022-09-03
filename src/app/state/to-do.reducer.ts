import { createReducer, on } from "@ngrx/store";
import { ToDo } from "../models/to-do.model";
import { fetchedToDos, setToDone, addToDoItem } from "./to-do.actions";

export interface State {
  hasBeenFetched: boolean,
  toDos: ToDo[]
};

export const initialState: State = {
  hasBeenFetched: false,
  toDos: []
};

export const toDoReducer = createReducer(
  initialState,
  on(fetchedToDos, (state, { toDos }) => ({...state, toDos, hasBeenFetched: true})),
  on(setToDone, (state, { toDoId, isDone }) => {
    let newState = {...state};
    let toDo = state.toDos.find(toDoElt => toDoElt.id === toDoId);

    if (toDo) {
      let newToDo = {...toDo};
      let newToDos = state.toDos.filter(toDo => toDo.id !== toDoId);
      newToDo.isDone = isDone;
      newToDo.isCrossedOut = !isDone;
      newToDo.modifiedDate = new Date();
      newToDos.push(newToDo)
      newToDos.sort((a, b) => a.id - b.id);
      newState.toDos = newToDos;
    }

    return newState;
  }),
  on(addToDoItem, (state, { toDo }) => ({...state, toDos: [...state.toDos, toDo]}))
);
