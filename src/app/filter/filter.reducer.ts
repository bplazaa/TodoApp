import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.fitrosValidos = 'todos';


export function filtroReducer(  state = estadoInicial,
                                action:fromFiltro.Acciones ): fromFiltro.fitrosValidos{
    switch(action.type){
        case fromFiltro.SET_FILTER:
            return action.filtro;
        default:
            return state;
    }

}

