import { useState } from "react";
const cousers = [
  {
    id: 1,
    name: 'js'
  },
  {
    id: 2,
    name: 'reactjs'
  },
  {
    id: 3,
    name: 'vuejs'
  },
]
function App() {
  const [checked, setChecked] = useState([])
  const handleChange = (id) => {
    setChecked(pre => {
      if(checked.includes(id)){
        return checked.filter(item => item !== id)
      } else {
        return [...pre, id]
      }
    })
  }
  console.log(checked)
  const handleApi = () =>{
    console.log( {
      ids: checked
    })

  }
  return(
    <div className="wraper">
        {cousers.map(
          (couser,index) =>
            ( <div key={index}>
              <input
              type="checkbox"
              checked={checked.includes(couser.id)}
              onChange={()=> handleChange(couser.id)}
              />
              {couser.name}
            </div>
        )
        )}
        <button onClick={handleApi}>submid</button>
    </div>
  )
}

export default App;
