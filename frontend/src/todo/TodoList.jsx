import React from 'react';
import IconButton from '../template/IconButton';

import { connect } from 'react-redux'

// import { Container } from './styles';

function TodoList(props) {
  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
          <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>
              <p>{todo.description}</p>
            </td>
            <td>
              
                <IconButton
                hide={todo.done}
                className="btn"
                styles="success"
                icon="check"
                onClick={() => props.handleMarkAsDone(todo)} />

                <IconButton
                hide={!todo.done}
                styles="warning"
                icon="undo"
                onClick={() => props.handleMarkAsPending(todo)} />

                <IconButton
                styles="danger"
                icon="trash-o"
                onClick={() => props.handleRemove(todo)} />
            </td>
          </tr>
        ))
  }

  return (
    <table className='table'>
        <thead>
          <tr>
            <th>Descrição</th>
            <th className='tableActions'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  }
}

export default connect(mapStateToProps)(TodoList);