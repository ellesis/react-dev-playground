import React, {useState, useReducer} from 'react'
import Student from './Student'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload.name
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false
      }

      return {
        count: state.count + 1,
        students: [...state.student]
      }
  }
}

const initialState = {
  count: 0,
  students: [{id: Date.now(), name: 'James', isHere: false}]
}

function Attendance() {
  const [name, setName] = useState('')
  const [studentInfo, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Attendance</h1>
      <p>Total student: {studentInfo.count}</p>
      <input
        type="text"
        placeholder="Input Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <button
        onClick={() => {
          dispatch({type: 'add-student', payload: {name}})
        }}
      >
        Insert
      </button>
      {studentInfo.students.map((student) => {
        return <Student key={student.id} name={student.name} />
      })}
    </div>
  )
}

export default Attendance
