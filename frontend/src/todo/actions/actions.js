export function changeDescription(event) {
    return {
        type: 'DESCRICAO_ALTERADA',
        payload: event.target.value
    }
} 

export function handleAdd(novaTarefa) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: novaTarefa
    }
}

export function handleSearch(description) {
    return {
        type: 'DESCRICAO_ALTERADA',
        payload: description
    }
} 

export function handleClear(limpar) {
    return {
        type: 'BUSCA_LIMPA',
        payload: limpar
    }
} 

export function handleRemove(removerTarefa) {
    return {
        type: 'TAREFA_REMOVIDA',
        payload: removerTarefa
    }
} 

export function handleMarkAsDone(marcarConcluido) {
    return {
        type: 'TAREFA_FEITA',
        payload: marcarConcluido
    }
} 

export function handleMarkAsPending(marcarPendente) {
    return {
        type: 'TAREFA_PENDENTE',
        payload: marcarPendente
    }
}
