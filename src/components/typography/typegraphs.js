import React from 'react';
import { Arrows } from '../iconssvg/icons';
function CostumeH1(props) {
  return (
    <div className='bigTitle'>
      <h1>{props.text}</h1>
      <Arrows />
    </div>
  );
}

function CostumeParaghraph(props) {
  return <div className='costumeParagraph'>{props.text}</div>;
}

export { CostumeH1, CostumeParaghraph };
