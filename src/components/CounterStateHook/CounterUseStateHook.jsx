import {React,useState} from 'react'

const CounterUseStateHook = () => {

  const [count,setCount] = useState(0);

  function incrementHandler() {
    setCount((num)=>num+1);
  }
  function decrementHandler() {
    if(count>0){
      setCount((num)=>num-1);
    }  
    
  }
  function resetHandler() {
    setCount(0);
  }


  return (
    <div className="counterContainer">
      <h1>Count - {count}</h1>
      <div className="btn-container">
        <button onClick={incrementHandler} className="increment-btn btn">Increment</button>
        <button onClick={decrementHandler} className="decrement-btn btn">Decrement</button>
        <button onClick={resetHandler} className="reset-btn btn">Reset</button>
      </div>
    </div>
  )
}

export default CounterUseStateHook