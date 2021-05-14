import React, { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [joke, setJoke] = useState(`loading joke`);
  const [fname, setFN] = useState(`john`);
  const [sname, setSN] = useState(`Doe`);

  const newJoke = (first, second) => {

    fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).
      then(res => res.json()).
      then(res2 => {
        console.warn(res2);
        setJoke(res2.value.joke)
      })

  }
  useEffect(() => {

    newJoke(fname, sname)


  }, [])

  return (
    <div className='container'>
    <div className='App'>
      <h1>Random Joke</h1>
      
      <input type="text"  placeholder='enter name'   value={fname} onChange={(e) => setFN(e.target.value)} />
      <input type="text"  placeholder='enter lastname' value={sname} onChange={(e) => setSN(e.target.value)} />
      <button onClick={() => newJoke(fname, sname)}> Click for new joke</button>

      <h1>{joke}</h1>
      

    </div>
    </div>
  )
}

export default App

