import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../Models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {


  @Input() todo: Todo;
  @ViewChild('txtInputFisico', {static:false}) txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    //console.log(this.todo);
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe( valor=>{
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);

    });
  }

  editar(){
    this.editando = true; 
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }
  terminarEdicion(){

    if(!this.txtInput.valid || this.txtInput.value === this.todo.texto){
      return;
    }
    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);

    this.editando = false;
  }

  destroy(){
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
