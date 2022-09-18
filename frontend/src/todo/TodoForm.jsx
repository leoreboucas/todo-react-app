import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

function TodoForm(props) {
  return (
    <div role="form" className='todoForm'>
        <Grid cols="12 9 10">
            <input 
            id='description'
            className="form-control" 
            type="text"
            placeholder={props.placeholder} 
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton styles='primary' icon="plus" />
        </Grid>
    </div>
  );
}

export default TodoForm;