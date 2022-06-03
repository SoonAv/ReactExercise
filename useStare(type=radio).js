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
  const [checked, setChecked] = useState()
  const handleChange =(id)=>(
    setChecked(id)
  )
  return (
    <div className="wraper">
      {cousers.map((couser, index) =>(
         <div key={index}>
         <input 
         checked={couser.id === checked}
         onChange={()=>handleChange(couser.id)} 
         type="radio"/>
         {couser.name}
       </div>
      )
      )}
    </div>

  )

}

export default App;
