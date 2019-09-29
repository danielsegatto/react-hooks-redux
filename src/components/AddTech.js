import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Form = styled.div`
  display: flex;
  input {
    width: 70%;
    font-family: sans-serif;
    font-size: 1.7em;
    padding-left: 4px;
  }
  button {
    background: #087880;
    border: 0;
    color: #FFF;
    font-family: sans-serif;
    font-size: 1.7em;
    width: 30%;
    cursor: pointer;
  }
`;

export default function AddTech() {
  
  const [newTech, setNewTech] = useState('');
  const dispatch = useDispatch();

  function addTech(newTech) {
    if (newTech !== '') {
      dispatch({ type: 'ADD_TECH', newTech });
    }
    setNewTech('')
    document.getElementById('inputNewTech').focus();
  }

  return (
    <Form>
      <input 
        id="inputNewTech" 
        value={newTech} 
        onChange={e => setNewTech(e.target.value)} 
        type="text" 
      />
      <button 
        type="button"
        onClick={() => addTech(newTech)}
      >Adicionar</button>
    </Form>
  );
}
