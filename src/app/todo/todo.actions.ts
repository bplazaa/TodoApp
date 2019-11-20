import { Action } from '@ngrx/store';

export const AGREGAR_TODO =     '[TODO] Agregar todo';
export const TOGGLE_TODO =      '[TODO] Toggle Todo';
export const TOGGLE_ALLTODO =   '[TODO] Toggle All Todo';
export const EDITAR_TODO =      '[TODO] Editar Todo';
export const BORRAR_TODO =      '[TODO] Borrar Todo';
export const BORRAR_COMPLETADOS =      '[Filter] Borrar Completados';



export class AgregarTodoAction implements Action{

    readonly type = AGREGAR_TODO;

    constructor( public texto: string){}
}

export class ToggleTodoAction implements Action{

    readonly type = TOGGLE_TODO;

    constructor( public id: number){}
}

export class ToggleAllTodoAction implements Action{

    readonly type = TOGGLE_ALLTODO;

    constructor(public completado:boolean){}
}

export class EditarTodoAction implements Action{

    readonly type = EDITAR_TODO;

    constructor( public id: number, public texto: string){}
}

export class BorrarTodoAction implements Action{

    readonly type = BORRAR_TODO;

    constructor( public id: number){}
}

export class BorrarCompletadosAction implements Action{
    readonly type = BORRAR_COMPLETADOS;
    constructor (){}

}


export type Acciones =  AgregarTodoAction   |
                        ToggleTodoAction    |
                        ToggleAllTodoAction |
                        EditarTodoAction    |
                        BorrarTodoAction    |
                        BorrarCompletadosAction;
