import {React,useReducer} from 'react'
const initialState = 0;
function reducer(state,action){
  switch(action){
    case 'increment':
      return state+1;
    case 'decrement':
      if(state>0)
      return state-1;
    case'reset':
      return 0;
    default:
      return state;
  }
}

const CounterUseStateHook = () => {

  // console.log(useReducer());

  const[count,dispatch] = useReducer(reducer,initialState);



  return (
    <div className="counterContainer">
      <h1>Count - {count}</h1>
      <div className="btn-container">
        <button onClick={()=>dispatch('increment')} className="increment-btn btn">Increment</button>
        <button onClick={()=>dispatch('decrement')} className="decrement-btn btn">Decrement</button>
        <button onClick={()=>dispatch('reset')} className="reset-btn btn">Reset</button>
      </div>
    </div>
  )
}

export default CounterUseStateHook