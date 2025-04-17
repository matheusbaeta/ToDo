import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <button id="add-button">ADD</button>
      </form>
      <ul className="todo-list">
        <li className="todo">
          {/* create some method to generate random unique ids */}
            <input type="checkbox" id="todo-1" />
            <label className="custom-checkbox" htmlFor="todo-1">
              <FontAwesomeIcon icon={ faCheck }  className='check-icon' />
            </label>
            <label htmlFor="todo-1" className="todo-text">
              Drink Water
            </label>
            <button className="delete-button">
              <FontAwesomeIcon icon={ faTrash }  className='delete-icon' />
            </button>
        </li>
        <li className="todo">
          {/* create some method to generate random unique ids */}
            <input type="checkbox" id="todo-2" />
            <label className="custom-checkbox" htmlFor="todo-2">
              <FontAwesomeIcon icon={ faCheck }  className='check-icon' />
            </label>
            <label htmlFor="todo-2" className="todo-text">
              Foo bar
            </label>
            <button className="delete-button">
              <FontAwesomeIcon icon={ faTrash }  className='delete-icon' inverse/>
              {/* just in case */}
              {/* <FontAwesomeIcon icon={ faTrash }  className='delete-icon' inverse/> */}
            </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
