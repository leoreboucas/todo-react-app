import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export function changeDescription(event) {
    return {
        type: 'DESCRICAO_ALTERADA',
        payload: event.target.value
    }
}

export function handleSearch(description = '') {
    const search = description ? `&description__regex=${description}` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)

    return {
        type: 'BUSCAR_TODO',
        payload: request
    }
} 

export function handleAdd(description) {
    const request = axios.post(URL, { description })

    return {
        type: 'TODO_ADICIONADO',
        payload: request
    }
} 

export function handleRemove(tarefaRemovida) {
    const request = axios.delete(`${URL}/${tarefaRemovida._id}`)

    return {
        type: 'TODO_REMOVIDO',
        payload: request
    }
} 

export function handleClear(limpar) {
    return {
        type: 'BUSCA_LIMPA',
        payload: limpar
    }
} 

export function handleMarkAsDone(descConcluida) {
    const request = axios.put(`${URL}/${descConcluida._id}`, {
        ...descConcluida,
        done: true
      })

    return {
        type: 'TAREFA_FEITA',
        payload: request
    }
} 

export function handleMarkAsPending(descPendente) {
    const request = axios.put(`${URL}/${descPendente._id}`, {
        ...descPendente,
        done: false
      })

    return {
        type: 'TAREFA_FEITA',
        payload: request
    }
}
