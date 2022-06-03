import { useReducer } from "react";
const initialState = 0
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('inval action')
    }

}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="wraper" style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>up</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
        </div>
    )
}



export default App;
