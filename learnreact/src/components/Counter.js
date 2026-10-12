import React from 'react'

const Counter = ({state, dispatch}) => {
    console.log()
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    )
}

export default Counter
