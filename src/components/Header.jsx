import React from 'react';
import { perfilImage } from '../images';
import data from '../data';

function Header() {
  return (
    <div>
      <header>
        <h1>{ data.name }</h1>
      </header>
      <div>  
        <div>
          <img src={ perfilImage } alt="Foto de Tharcio" width="200px" title="Foto principal"/>
        </div>
          <p>{ data.description }</p>
      </div>
    </div>
  );
}

export default Header;
