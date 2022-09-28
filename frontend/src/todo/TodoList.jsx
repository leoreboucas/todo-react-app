import React from 'react';
import IconButton from '../template/IconButton';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleMarkAsDone, handleMarkAsPending, handleRemove } from './actions/actions'

// import { Container } from './styles';

function TodoList(props) {
  const { handleMarkAsDone, handleMarkAsPending, handleRemove } = props

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
                onClick={() => handleMarkAsDone(todo)} />

                <IconButton
                hide={!todo.done}
                styles="warning"
                icon="undo"
                onClick={() => handleMarkAsPending(todo)} />

                <IconButton
                styles="danger"
                icon="trash-o"
                onClick={() => handleRemove(todo)} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleMarkAsDone,
    handleMarkAsPending,
    handleRemove
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);