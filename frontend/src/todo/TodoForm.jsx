import React from 'react';

// import { Container } from './styles';

function TodoForm(props) {
  return (
    <div >
        <input 
        className="form-control form-control-sm" 
        type="text"
        placeholder={props.placeholder} 
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        />
    </div>
  );
}

export default TodoForm;