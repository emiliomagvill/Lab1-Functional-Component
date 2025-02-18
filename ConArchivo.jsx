import React from 'react'
import { heroes } from './heroes.js'  

const ConHeroes = () => {
  return (
    <div>
      <h1>Lista de Héroes</h1>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            <strong>{hero.nombre}</strong>: {hero.poder}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ConHeroes