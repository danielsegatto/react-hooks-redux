import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function QtyTechs() {

  const qty = useSelector(state => state.techs.length);
  const plural = useMemo(() => qty > 1 ? 'tecnologias' : 'tecnologia', [qty]);

  return (
    <strong>{ qty } { plural }</strong>
  );
}
