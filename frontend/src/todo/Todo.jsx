import React, { useState } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

function Todo() {
  const [description, setDescription] = useState('');
  const [list, setList] = useState([])

  function handleChange(e) {
    setDescription(e.target.value)
  }

  function handleAdd() {
    axios.post(URL, { description })
    .then(resp => console.log('Funcionou'))
  }

  return (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm handleAdd={handleAdd} description={description} handleChange={handleChange} />
        <TodoList />
    </div>
  );
}

export default Todo;