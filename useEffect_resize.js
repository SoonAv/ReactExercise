import { useEffect, useState } from "react";

function Content() {
    const [width, setWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () =>  window.removeEventListener('resize', handleResize)
        

    }, [])

    return (
        <div className="warper">
            
                <h1>{width}</h1>

           
        </div>

    )

}
export default Content;