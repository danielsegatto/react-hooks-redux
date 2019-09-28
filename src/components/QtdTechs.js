import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function QtdTechs() {

  const qtd = useSelector(state => state.techs.length);
  const plural = useMemo(() => qtd > 1 ? 'tecnologias' : 'tecnologia', [qtd]);

  return (
    <strong>{ qtd } { plural }</strong>
  );
}
