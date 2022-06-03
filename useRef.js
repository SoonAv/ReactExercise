import { useRef, useState } from "react";
function App() {
    const [count, setCount] = useState(60)
    let timerid = useRef()
    const handleStart = () => {
        timerid.current = setInterval(() => {
            setCount(prve => prve - 1)
        }, 1000);
        console.log('start', timerid.current)
    }
    const handleStop = () => {
        clearInterval(timerid.current)
        console.log('stop', timerid.current)
    }
    return (
        <div className="wraper" style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </div>
    )
}
export default App;
