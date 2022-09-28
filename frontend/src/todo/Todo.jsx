import React from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {  } from './actions/actions'


function Todo(props) {

  // function handleClear() {
  //   setDesc('')
  //   setDescription('')
  // }

  return (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />

        <TodoList />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    description: state.todo.description,
    list: state.todo.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);