import React from 'react'

export default function MeusDados({Nome, Curso, Universidade}) {
  return (
    <div>
        <h1>{Nome}</h1>
        <h1>{Curso}</h1>
        <h1>{Universidade}</h1>
    </div>
  )
}
