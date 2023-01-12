import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNew, decrement, incerement, incerementByValue } from '../../store/counterSlice';

function Index() {


    const [number, setnumber] = useState(0);

    let state = useSelector(state => state);
    let dispatch = useDispatch();
  
    const increase = () => {
      dispatch(incerement());
      // dispatch({type:'INCREMENT'})
    }
  
    const decrease = () => {
      dispatch(decrement());
      // dispatch({type:'DECREMENT'})
    }
  
    const calc = () => {
      dispatch(incerementByValue(5))
    }
  
    const push = () => {
      dispatch(addNew())
    }
  
    return (<>
      <h1>Value: {state.counter.value}</h1>
      <h1>Value2: {state.counter.value2.length}</h1>
  
      <div>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
      </div>
      <div>
        <label>Number:</label>
        <input type='text' onChange={(e) => setnumber(e.target.value)} />
        <button onClick={() => calc()}>Calc</button>
      </div>
      <div>
        <button onClick={() => push()}>Push</button>
      </div>
    </>
  )
}

export default Index