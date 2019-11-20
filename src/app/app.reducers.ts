import { Todo } from './todo/Models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer'

import * as fromFiltroActions from './filter/filter.actions'

export interface AppState{
    todos: Todo[];
    filtro: fromFiltroActions.fitrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro : fromFiltro.filtroReducer
}