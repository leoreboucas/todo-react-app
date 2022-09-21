import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

function TodoForm(props) {
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
              value={props.description}
              onChange={(e) => props.handleChange(e)}
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

export default TodoForm;