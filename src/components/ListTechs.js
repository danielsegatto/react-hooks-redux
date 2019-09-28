import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ListTechs() {

  const techs = useSelector(state => state.techs);
  const dispatch = useDispatch();

  function removeTech(tech, techs) {
    let newTechs = techs.filter(t => {
      return t !== tech;
    })
    dispatch({ type: 'REMOVE_TECH', techs: newTechs });
  }

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <ul>
			{
        techs.map(tech => 
          <li key={tech}>
            {tech} <button onClick={() => removeTech(tech, techs)}>X</button>
          </li>
        )
      }
    </ul>
  );
}
