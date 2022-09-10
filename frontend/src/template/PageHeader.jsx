import React from 'react';

// import { Container } from './styles';

function PageHeader(props) {
  return (
    <header className='page-header'>
        <h2>
            {props.name} <small>{props.small}</small>
        </h2>
    </header>
  );
}

export default PageHeader;