const baseURL = 'http://localhost:3001/';

const App = () => {

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

    // hardcoded localhost since no deployment is necassary
    fetch(`${baseURL}?gitURL=${value}`, params)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      console.log(data, 'data results')
    })
  }

  return (
    <div>
      <h1>
        Github Api Node App
      </h1>
      <p>Enter repository URL and check the console for results</p>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>send</button>
      </form>
    </div>
  );
}

export default App;
