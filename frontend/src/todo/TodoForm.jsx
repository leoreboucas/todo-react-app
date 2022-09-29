import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSearch, changeDescription, handleAdd, handleClear } from '../todo/actions/actions'
import { useEffect } from 'react';

function TodoForm(props) {

  const { 
      description,
      changeDescription,
      handleSearch,
      handleAdd,
      handleClear
     } = props

  const keyHandler = (e) => {
    if(e.key ==='Enter') {
      e.shiftkey ? handleSearch() : handleAdd(description)
    } else if (e.key === 'Escape') {
      handleClear()
    }
  }

  useEffect(() => {
    return handleSearch
  }, [handleSearch])


  return (
    <div role='form' className='todoForm'>
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
            onClick={() => handleAdd(description)}/>
          <IconButton 
            styles='info' 
            icon="search" 
            onClick={handleSearch}/>
          <IconButton 
            styles='default' 
            icon="close" 
            onClick={handleClear}/>
        </Grid>
        
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
    changeDescription,
    handleSearch,
    handleAdd,
    handleClear
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);