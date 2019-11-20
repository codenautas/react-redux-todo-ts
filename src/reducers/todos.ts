import Todo from '../models/Todo'
// import { ActionTypes, Action } from '../actions/todos'

import { createReducer, ActionsFrom } from 'redux-typed-reducer';

// Define our State interface for the current reducer
export interface State {
  todos: Todo[]
}

// Define our initialState
export const initialState: State = {
  todos: [] // We don't have any todos at the start of the app
}

export const todoReducers = {
  ADD_TODO: (payload: {todo: Todo}) => (
    (state: State) =>  (
      {
        ...state,
        todos: [...state.todos, payload.todo] // Add todo to todos array
      }
    )
  ),
  TOGGLE_TODO: (payload: {todoId: number}) => (
    (state: State) => (
      {
        ...state,
        todos: state.todos.map(todo => todo.id === payload.todoId ? { ...todo, done: !todo.done } : todo)
      }
    )
  )
}

// @ts-ignore
type ActionsTodo = ActionsFrom<typeof todoReducers>;

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export var reducer = createReducer(todoReducers, initialState);
