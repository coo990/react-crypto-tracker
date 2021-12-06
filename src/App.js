import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
      //Check data passing through
      console.log(res.data)
    }).catch(error => alert('Error API Error!'))
  }, [])


  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
    </div>
  );
}

export default App;
