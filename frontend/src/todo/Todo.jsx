import React, { useState } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function Todo() {
  const [form, setForm] = useState('');

  return (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm placeholder="Adicione uma tarefa" value={form} onChange={setForm} />
        <TodoList />
    </div>
  );
}

export default Todo;