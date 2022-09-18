import React from 'react';

// import { Container } from './styles';

function IconButton(props) {
  return (
        <>
            {!props.hide && (
                <button 
                className={'btn btn-' + props.styles}
                onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
                </button>
        )}
        </>
    );
}

export default IconButton;