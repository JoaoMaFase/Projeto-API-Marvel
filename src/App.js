import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const [personagem,setPersonagem] = useState('')
  const [personagens,setPersonagens] = useState('')
  const timeStamp = 1691718217
  const md5 = '0862040e867ec518e78e73de3f1d5769'
  const apiKey = '5405277fe07910944c95152e028e62e0'


  async function Buscar() {
    let url = ''
    if(personagem != ''){
      url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=10&nameStartsWith=${personagem}&orderBy=name`
      console.log(url)
    }
    else{
      url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=10&orderBy=name`
    }
    let response = await axios.get(url)
    setPersonagens(response.data.results) 
  }

  {useEffect(() => {
    {Buscar()}
  }, [personagem])}

  return (
    <div className="mae">
      <section className='header'>
        <img src='/marvel.png'/>
        <div className='header-right-side'>
          <div className='header-menu'>
            <a>Home</a>
            <a>Personagens</a>
            <a>Quadrinhos</a>
            <a>Eventos</a>
            <a>Contatos</a>
          </div>
          <img src='/icon.png'/>

        </div>
      </section>

      <section className='mid-content'>
        <div className='mid-content-row'>
          <h1>Personagens da MARVEL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
        </div>
        <div className='mid-content-input'>
          <label>Nome</label>
          <input type='text' placeholder='Insira o personagem' value={personagem} onChange={e => setPersonagem(e.target.value)}/>
        </div>
      </section>

      <section className='content'>
        {personagens &&
          personagens.map((item,index) => (
            <div>
              <h1>{item[0].name}</h1>
            </div>
          ))}
      </section>
    </div>
  )
}

export default App;
