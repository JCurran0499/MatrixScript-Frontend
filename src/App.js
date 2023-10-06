import { Title } from './components/title/Title'
import { Box } from './components/box/Box'
import { Annotations } from './components/annotations/Annotations'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [session, handleSession] = useState('')

  useEffect(() => {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BACKEND}/token`
    })
    .then((res) => res.data)
    .then((json) => json.sessionToken)
    .then(handleSession)
  }, [])


  return (
    <div className="App">
      <Title/>
      <Box sessionToken={session}/>
      <Annotations/>
    </div>
  );
}

export default App;
