import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

interface Repo {
  name: string;
  description: string;
}

function App() {

  // Repo[] = Cria uma tipagem devido ao uso do typescript, nisso em base usa a interface como referência.
  // ([]) = Inicia isso com um Array vazio.
  const [repos, setRepos] = useState<Repo[]>([]);
  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);

  // Renderizar em REACT
  // hook =  estado de um componente.
  // ou uma propriedade muda ou um elemento pai muda assim renderizando todos os demais componentes.

  // Criando um estado para fazer a busca.
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/TcharlesDaviLassen/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data))
  }, [])

  console.log("response")

  // Primeiro erro ao usar o useEffec
  // useEffec dispara uma função toda vez que uma variavel muda.
  // Dessa forma com esse useEfect cria um ESTADO DERIVADO fazendo com que renderize mais do que o necessário. 
  // useEffect(() => {
  //   if (search.length) {
  //     setFilteredRepos(repos.filter(f => f.name.includes(search))) // includes(search) = inclua o que digitei na busca.
  //   }
  // }, [search])

  // Correção do ESTADO DERIVADO. não se precisa de um outro estado para calcular, pode ser foito dentro de uma variavel também.
  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.includes(search))
    : [];

  return (
    <>
      <div className='body'>
        <h1>FILTER REPOS GITHUB</h1>

        <div>
          <input
            name="search"
            type="text"
            placeholder='Busca...'
            onChange={e => setSearch(e.target.value)} // Toda vez que digita pega o valor atribuido ao input.
            value={search}
          />
        </div>

      </div>

      <div>
        {search.length > 0 ? (
          <ul>
            {filteredRepos.map(repo => {
              return (
                <li key={repo.name}>
                  {repo.name}
                </li>
              )
            })
            }
          </ul>
        ) : (
          <ul>
            {repos.map(repo => {
              return (
                <li key={repo.name}>
                  {repo.name}
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export { App }
