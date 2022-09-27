import React, { useState } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import axios from 'axios'
import { useEffect } from 'react';

const URL = 'http://localhost:3003/api/todos'

function Todo() {
  const [description, setDescription] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([])

async function handleList (search= ''){
    await axios.get(`${URL}?sort=-createdAt${search}`).then(resp => setList([resp.data]))
  }

  function handleChange(e) {
    setDescription(e.target.value)
  }

  function handleAdd() {
    if(description) {axios.post(URL, { description })
    .then(resp => setList([...list, resp.data]))
    setDesc('')
    setDescription('')}
  }

  function handleSearch() {
    return setDesc(description)
  }

  function handleClear() {
    setDesc('')
    setDescription('')
  }

  function handleMarkAsDone (desc){
    axios.put(`${URL}/${desc._id}`, {
      ...desc,
      done: true
    })
    .then(resp => setList([...list, resp.data]))
  }

  function handleMarkAsPending (desc){
    axios.put(`${URL}/${desc._id}`, {
      ...desc,
      done: false
    })
    .then(resp => setList([...list, resp.data]))
  }

  function handleRemove (desc) {
    axios.delete(`${URL}/${desc._id}`)
    .then(resp => setList([...list, resp.data]))
  }

  useEffect(() => {
    const search = desc ? `&description__regex=${desc}` : ''
    handleList(search)
 },[desc, list])

  return (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm
        />

        <TodoList
        />
    </div>
  );
}

export default Todo;