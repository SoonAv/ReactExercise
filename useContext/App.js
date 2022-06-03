import Content from "./Content";
import { ThemeProvider } from "./ThemeContext";
import './App.css'


function App() {

  return (
    <ThemeProvider>
      <div className="wraper" style={{ padding: 20 }}>
        <button onClick={HandleClick}>ThogleTheme</button>
        <Content />
      </div>
    </ThemeProvider>



  )
}



export default App;
