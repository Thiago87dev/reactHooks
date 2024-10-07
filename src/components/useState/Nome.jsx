import React, { useState } from 'react'

const Nome = () => {
    const [nome, setNome] = useState('teste');
  return (
    <div>
        <h1>Nome</h1>
        <input 
        type="text" 
        placeholder='Digite seu nome' 
        value={nome}
        onChange={(e) => setNome(e.target.value)} 
        />
        <p>Meu nome é {nome}</p>
    </div>
  )
}

export default Nome