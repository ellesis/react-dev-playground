import React, {useState, useReducer} from 'react'

// Dispatch - State Update
// Action - Request State Update
// Reducer - Request info
const ACTION_TYPE = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}
const reducer = (state, action) => {
  console.log('reducer working', state, action)
  switch (action.type) {
    case ACTION_TYPE.deposit:
      return state + action.payload
    case ACTION_TYPE.withdraw:
      return state - action.payload
    default:
      return state
  }
}

export default function Reducer() {
  const [number, setNumber] = useState(0)
  const [money, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h2>useReducer Bank</h2>
      <p>total: $ {money}</p>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000" />
      <button
        onClick={() => {
          dispatch({type: ACTION_TYPE.deposit, payload: number})
        }}
      >
        input
      </button>
      <button
        onClick={() => {
          dispatch({type: ACTION_TYPE.withdraw, payload: number})
        }}
      >
        output
      </button>
    </div>
  )
}
