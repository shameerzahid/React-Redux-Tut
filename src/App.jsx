import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {IncNumber, DecNumber} from './actions/index'
function App() {
const mystate = useSelector((state) => state.changeNumber);
const dispatch = useDispatch();
  return (
    <>
    
        <h1>Increment/Decrement Redux</h1>
          <div className="quantity">
        <a href="#" className="decrement-btn" title="Decrement" onClick={() => dispatch(DecNumber())}>-</a>
        <input type="text" className="quantity-input" value={mystate} />
        <a href="#" className="increment-btn" title="Increment" onClick={() => dispatch(IncNumber())}>+</a>
    </div>
    </>
  )
}

export default App
