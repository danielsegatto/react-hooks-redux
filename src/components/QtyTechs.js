import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  background: #087880;
  line-height: 40px;
  color: #FFF;
  font-size: 1.7em;
  font-family: sans-serif;
`;

export default function QtyTechs() {

  const qty = useSelector(state => state.techs.length);
  const plural = useMemo(() => qty > 1 ? 'tecnologias' : 'tecnologia', [qty]);

  return (
    <Header>{ qty } { plural }</Header>
  );
}
