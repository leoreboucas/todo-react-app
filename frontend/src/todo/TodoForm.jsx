import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { changeDescription } from '../todo/actions/actions'

function TodoForm(props) {
  const { 
      description,
      changeDescription
     } = props

  const keyHandler = (e) => {
    if(e.key ==='Enter') {
      e.shiftkey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handlerClear()
    }
  }

  return (
    <form className='todoForm'>
        <Grid cols="12 9 10">
            <input 
              id='description'
              className="form-control" 
              onKeyUp={keyHandler}
              type="text"
              placeholder="Adicione uma tarefa" 
              value={description}
              onChange={(e) => changeDescription(e)}
            />
        </Grid>
        
        <Grid cols="12 3 2">
          <IconButton 
            styles='primary' 
            icon="plus" 
            onClick={props.handleAdd}/>
          <IconButton 
            styles='info' 
            icon="search" 
            onClick={props.handleSearch}/>
          <IconButton 
            styles='default' 
            icon="close" 
            onClick={props.handleClear}/>
        </Grid>
        
    </form>
  );
}

function mapStateToProps(state) {
  return {
    description: state.todo.description
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeDescription }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);