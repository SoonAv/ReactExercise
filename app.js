import { useState } from "react";
import Content from "./Content";


function App() {
    const [show, setShow] = useState(false)
    
    return (
        <div className="wraper" style={{ padding: 20 }}>
            <button onClick={()=>setShow(!show)}>togle</button>
            {show && <Content/>}
        </div>
    )
}
