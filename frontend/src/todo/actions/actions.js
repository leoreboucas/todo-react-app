import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export function changeDescription(event) {
    return {
        type: 'DESCRICAO_ALTERADA',
        payload: event.target.value
    }
}

export function handleSearch() {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=${description}` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp => dispatch({ type: 'TODO_CARREGADO',payload: resp.data }))
    }
}

export function handleAdd(description) {
    return dispatch => {
        axios.post(URL, { description })
        .then(resp => dispatch(handleClear()))
        .then(resp => dispatch(handleSearch()))
    }
} 

export function handleRemove(tarefaRemovida) {
    return dispatch => {
        axios.delete(`${URL}/${tarefaRemovida._id}`)
        .then(resp => dispatch(handleSearch()))
    }
} 

export function handleClear(limpar) {
    return [{ type: 'TODO_CLEAR'}, handleSearch()]
} 

export function handleMarkAsDone(todo) {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: true
        })
        .then(resp => dispatch({ type: 'TAREFA_FEITA',payload: resp }))
        .then(resp => dispatch(handleSearch()))
    }
} 

export function handleMarkAsPending(todo) {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: false
        })
        .then(resp => dispatch({ type: 'TAREFA_FEITA',payload: resp }))
        .then(resp => dispatch(handleSearch()))
    }
}
