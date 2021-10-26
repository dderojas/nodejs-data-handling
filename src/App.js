import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { value } = e.target.children[0];
    
    const params = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      mode: 'cors',
      cache: 'default'
    }

    fetch(`http://localhost:3001/?gitURL=${value}`, params)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      console.log(data, 'data!!!')
      setItems([...data, items])
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        Github Api Node App
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>send</button>
      </form>
      {items.map((value) => {
        return <div>{value}</div>
      })}
    </div>
  );
}

export default App;
