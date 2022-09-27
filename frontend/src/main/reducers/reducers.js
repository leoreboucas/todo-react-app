import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: function(state, action) {
            return {
                description: 'Testando',
                list: [{
                    _id: 1,
                    description: 'Pagar fatura do cartão',
                    done: false
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
    }
})

export default rootReducers;