export function handleAdd(novaTarefa) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: novaTarefa
    }
}

export function handleChange(description) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: description
    }
} 

export function handleClear(limpar) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: limpar
    }
} 

export function handleRemove(removerTarefa) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: removerTarefa
    }
} 

export function handleMarkAsDone(marcarConcluido) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: marcarConcluido
    }
} 

export function handleMarkAsPending(marcarPendente) {
    return {
        type: 'TAREFA_ADICIONADA',
        payload: marcarPendente
    }
}
