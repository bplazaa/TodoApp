import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions'
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../Models/todo.model';
import { BorrarCompletadosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos : fromFiltro.fitrosValidos[] = ['todos', 'completados','pendientes'];
  filtroActual: fromFiltro.fitrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state=>
      {
        this.contarPendientes(state.todos);
        this.filtroActual = state.filtro;
      });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.fitrosValidos){
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }


  contarPendientes(todos: Todo[]){
    this.pendientes = todos.filter(todo=> !todo.completado).length;

  }

  borrarCompletados(){
    const accion = new BorrarCompletadosAction();
    this.store.dispatch(accion);
  }
}
