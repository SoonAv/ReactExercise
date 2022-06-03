import { useReducer } from "react";


//useReducer

//1.initstate
const initState = {
  job: '',
  jobs: []
}

// 2. action
const SET_JOB = 'set_job'
const ADD_JOBS = 'add_jobS'
const DELETE_JOB = 'delete_job'

const setJob = payload =>{
  return {
    type: SET_JOB,
    payload
  }
}
// 3.reducer


const reducer = function(state,action){
  console.log(action)
  switch(action.type){
    case SET_JOB:
        return {
          ...state,
          job: action.payload
        }
      default:
        throw new Error('n')
  }
  return state
}
//4. dispatch

function App() {
    const [state, dispatch] = useReducer(reducer,initState)
    const { job, jobs } = state
    return (
        <div className="wraper" style={{ padding: 20 }}>
            <h3>Todo</h3>
            <input 
            onChange={e => {
              dispatch(setJob(e.target.value))
            }}
            value={job}
            placeholder="Enter your job"/>
        
            <button>Add</button>
            <ul>
                { jobs.map((job,i) => <li key={i}>{job} &times;</li>)}
            </ul>
        </div>
    )
}



export default App;
