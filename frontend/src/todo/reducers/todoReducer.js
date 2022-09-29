const INITIAL_STATE = { description: '', list: [] }

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRICAO_ALTERADA':
            return { ...state, description: action.payload }

        case 'TODO_CARREGADO':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}

export default reducers