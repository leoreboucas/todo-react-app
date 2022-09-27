const INITIAL_STATE = {
    description: 'Testando',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Comprar os livros',
        done: false
    }, {
        _id: 3,
        description: 'Jogar bola',
        done: false
    }]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRICAO_ALTERADA':
            return {
                ...state,
                description: action.payload
            }
        case 'TAREFA_ADICIONADA':
            return {
                ...state,
                list: action.payload
            }
        
        case 'BUSCA_LIMPA':
            return {
                ...state,
                list: action.payload
            }
        case 'TAREFA_REMOVIDA':
            return {
                ...state,
                list: action.payload
            }
        case 'TAREFA_FEITA':
            return {
                ...state,
                list: action.payload
            }
        case 'TAREFA_PENDENTE':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default reducers