
import './App.css';

import Game from './game/Game.jsx'
import Todo from './todo/Todo';
import Event from './event/Event';

const App = () => {
  return (
    <div>
      <Event />
      <hr />
      <hr />
      <Game />
      <hr />
      <hr />
      <Todo />
    </div>
  )
}

export default App;
