import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState("")

  const getData = async () => {
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json()
    setAdvice(data.slip)
  }
  useEffect(() => {
    getData()
  }, [])
  return (<div>
    <h1 className='App'> API Testing</h1>
    {advice.advice ?
    <p className='App'>{advice.advice}</p>
  :
  <p className='App'>No data available</p>
  }
  <div className='buttonPosition'>
    <button onClick={getData}>Advice</button>
    </div>
  </div>)
}

export default App;
