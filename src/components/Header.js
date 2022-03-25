import React from 'react';

const Header = (props) => {    
  return (
    <header className="header">
        <h1>React Todo list</h1>
        <button
         className={props.isAdd ? 'btn-add' : 'btn-remove'}
         onClick={props.toggle}>
            {props.isAdd ? '+' : '-'}
        </button>
    </header>
  )
}

export default Header