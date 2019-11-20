import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../Models/todo.model';
import * as fromFilter from '../../filter/filter.actions'


@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: fromFilter.fitrosValidos;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
      this.store.subscribe(state=>{
        this.todos = state.todos;
        this.filtro = state.filtro;
      }
    );
  }

}
