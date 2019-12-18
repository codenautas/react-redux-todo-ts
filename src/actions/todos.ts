import Todo from '../models/Todo'

import { ActionsFrom, createDispatchers } from 'redux-typed-reducer'
import { todoReducers } from '../reducers/todos'

/*
 * In order to automatically generate id for our todos
 */  
let nextId = 0

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export const ActionTypes = {
  ADD_TODO : 'ADD_TODO',
  TOGGLE_TODO : 'TOGGLE_TODO'
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface AddTodoAction { type: typeof ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface ToggleTodoAction { type: typeof ActionTypes.TOGGLE_TODO, payload: { todoId: number } }

export const dispatchers = createDispatchers(todoReducers)

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addTodo(name: string): AddTodoAction {
  return dispatchers.ADD_TODO({ 
    todo: {
      id: nextId++,
      name: name,
      done: false
    }
  })
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */

export type Action = ActionsFrom<typeof todoReducers>;
