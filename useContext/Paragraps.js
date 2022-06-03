import { useContext } from 'react';

import { ThemeContext } from './ThemeContext'
function Paragraps() {
    const context = useContext(ThemeContext)

    return (
        <div className="wraper" style={{ padding: 20 }}>
            <h1
               className={context.theme}
            >heleo anh em </h1>
        </div>
    )
}
export default Paragraps;
