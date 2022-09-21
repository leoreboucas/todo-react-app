import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

function TodoForm(props) {
  return (
    <form onSubmit={e => e.preventDefault()} className='todoForm'>
        <Grid cols="12 9 10">
            <input 
            id='description'
            className="form-control" 
            type="text"
            placeholder="Adicione uma tarefa" 
            value={props.description}
            onChange={(e) => props.handleChange(e)}
            />
        </Grid>
        
        <Grid cols="12 3 2">
          <IconButton styles='primary' icon="plus" onClick={props.handleAdd}/>
          <IconButton styles='info' icon="search" onClick={props.handleSearch}/>
        </Grid>
        
    </form>
  );
}

export default TodoForm;