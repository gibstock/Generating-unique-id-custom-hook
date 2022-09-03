import { useState } from 'react';
import Checkbox from './components/Checkbox';
import './App.css';

function App() {
  const [checked, setChecked ] = useState(false)
  const [checked2, setChecked2 ] = useState(false)
  const [newCheck, setNewCheck] = useState('')
  const [newCheck2, setNewCheck2] = useState('')

  const handleChange = () => {
    setChecked(!checked)
  }
  const handleChange2 = () => {
    setChecked2(!checked2)
  }

  return (
    <>
      <div className="App">
        <Checkbox 
          label={newCheck}
          value={checked}
          onChange={handleChange}
        />
        <Checkbox 
          label={newCheck2}
          value={checked2}
          onChange={handleChange2}
        />
      </div>
      <div>
        <input 
          type="text"
          value={newCheck}
          placeholder='Checkbox 1'
          onChange={e => setNewCheck(e.target.value)} 
        />
        <input 
          type="text"
          value={newCheck2}
          placeholder='Checkbox 2'
          onChange={e => setNewCheck2(e.target.value)} 
        />
      </div>
    </>
  );
}

export default App;
