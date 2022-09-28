const INITIAL_STATE = { description: '', list: [] }

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRICAO_ALTERADA':
            return {
                ...state,
                description: action.payload
            }

        case 'TODO_ADICIONADO':
            return {
                ...state,
                description: ''
            }
        case 'TODO_REMOVIDO':
            console.log(action.payload)
            return {
                ...state,
            }
        case 'BUSCAR_TODO':
            return {
                ...state,
                list: action.payload.data
            }
        case 'BUSCA_LIMPA':
            return {
                ...state,
                list: action.payload
            }
        case 'TAREFA_FEITA':
            return {
                ...state,
                list: [...state.list, action.payload.data]
            }
        case 'TAREFA_PENDENTE':
            return {
                ...state,
                list: [...state.list, action.payload.data]
            }
        default:
            return state
    }
}

export default reducers