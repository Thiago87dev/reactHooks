import './App.css';
import Car from './components/useState/Car';
import Color from './components/useState/Color';
import Counter from './components/useEffects/Counter';
import RenderCount from './components/useEffects/RenderCount';
import Timer from './components/useEffects/Timer';
import ManyComponents from './components/useContext/manyComponents';
import RenderCountRef from './components/useRef/RenderCountRef';
import FocusRef from './components/useRef/FocusRef';
import PrevRef from './components/useRef/PrevRef';
import Todo from './components/useReducer/Todo';
import TodoCallbackPrincipal from './components/useCallback/TodoCallbackPrincipal';
import Calculation from './components/useMemo/Calculation';
import Fetch from './components/customHook/Fetch';



function App() {
  return (
    <div className="App">
      <Color/>
      <Car/>
      <RenderCount/>
      <Counter/>
      <Timer/>
      <ManyComponents/>
      <RenderCountRef/>
      <FocusRef/>
      <PrevRef/>
      <Todo/>
      <TodoCallbackPrincipal/>
      <Calculation/>
      <Fetch/>
    </div>
  );
}

export default App;
