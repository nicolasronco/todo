import { createReducer, on } from "@ngrx/store";
import { ToDo } from "../models/to-do.model";
import { fetchedToDos, setToDone } from "./to-do.actions";

export interface State {
  toDos: ToDo[]
};

export const initialState: State = {
  toDos: []
};

export const toDoReducer = createReducer(
  initialState,
  on(fetchedToDos, (state, { toDos }) => ({...state, toDos})),
  on(setToDone, (state, { toDoId, isDone }) => {
    let newState = {...state};
    let toDo = state.toDos.find(toDoElt => toDoElt.id === toDoId);

    if (toDo) {
      let newToDo = {...toDo};
      let newToDos = state.toDos.filter(toDo => toDo.id !== toDoId);
      newToDo.isDone = isDone;
      newToDos.push(newToDo)
      newToDos.sort((a, b) => a.id - b.id);
      newState.toDos = newToDos;
    }

    return newState;
  })
);
