import {React,useReducer} from 'react'
const initialState={
  counter : 0,
  counter1: 5
}
function reducer(state,action){
  switch(action.type){
    case 'increment':
      return {...state,counter: state.counter+action.payload};
      
    case 'decrement':
      if(state.counter>0)
        return {...state,counter: state.counter-action.payload};
        return initialState;
    case 'increment1':
        return {...state,counter1: state.counter1+action.payload};
      
    case 'decrement1':
      if(state.counter1>5)
        return {...state,counter1: state.counter1-action.payload};
        return initialState;
    case'reset':
      return initialState;
      
    default:
      return state;
  }
}

const CounterObject = () => {

  
  //console.log(useReducer());

  const[count,dispatch] = useReducer(reducer,initialState);

  

  return (
    <div className="counterContainer">
      <h1>Count - {count.counter}</h1>
      <h1>Count - {count.counter1}</h1>
      <div className="btn-container">
        <button onClick={()=>dispatch({type:'increment', payload:1})} className="increment-btn btn">Increment</button>
        <button onClick={()=>dispatch({type:'decrement', payload:1})} className="decrement-btn btn">Decrement</button>
        
        {/* increment and decrement by 5 */}
        <button onClick={()=>dispatch({type:'increment', payload:5})} className="increment-btn btn">Increment</button>
        <button onClick={()=>dispatch({type:'decrement', payload:5})} className="decrement-btn btn">Decrement</button>


        {/* increment and decrement by 2*/}
        <button onClick={()=>dispatch({type:'increment1', payload:2})} className="increment-btn btn">Increment</button>
        <button onClick={()=>dispatch({type:'decrement1', payload:2})} className="decrement-btn btn">Decrement</button>


        <button onClick={()=>dispatch({type:'reset'})} className="reset-btn btn">Reset</button>

      
      </div>
    </div>
  )
}

export default CounterObject