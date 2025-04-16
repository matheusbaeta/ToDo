import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="wrapper">
      <h1>TO DO APP</h1>
      <form>  
        <input 
          id='todo-input'
          type='text' 
          placeholder='type something here'
          autoComplete='off'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
