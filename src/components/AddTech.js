import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddTech() {
  
  const [newTech, setNewTech] = useState('');
  const dispatch = useDispatch();

  function addTech(newTech) {
    dispatch({ type: 'ADD_TECH', newTech: newTech });
    setNewTech('')
    document.getElementById('inputNewTech').focus();
  }

  return (
    <>
      <input id="inputNewTech" value={newTech} onChange={e => setNewTech(e.target.value)} type="text" />
      <button type="button" onClick={() => addTech(newTech)}>Adicionar</button>
    </>
  );
}
