import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const List = styled.ul`
  background: ${props => props.theme};
  color: #FFF;
  font-family: sans-serif;
  list-style: none;
  padding-left: 16px;
  margin: 0;

  li {
    font-size: 1.5em;
    line-height: 50px;
    display: flex;
    align-items: center;

    button {
      border: 0;
      background: #FFF;
      margin-left: 10px;
      border-radius: 5px;
      font-weight: bolder;
      color: ${props => props.theme};
      cursor: pointer;
    }
  }
`;

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
    <List theme={'#005868'}>
			{
        techs.map(tech => 
          <li key={tech}>
            {tech} <button onClick={() => removeTech(tech, techs)}>X</button>
          </li>
        )
      }
    </List>
  );
}
