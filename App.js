import React, {useRef, useState} from 'react'
import Lists from './Lists'

function App(){
  const [inputlist,setinputlist] = useState("")
  const [items,setitems] = useState([])

  const itemEvent = (event) => {
    setinputlist(event.target.value)
  }

  const listofitems = () => {
    setitems((olditems) => {
      return [...olditems,inputlist]
    })
    setinputlist("")
  }

  const deleteIteme = (id) => {
    console.log("deleted :",id)
    setitems((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }

  return(
    <>

      <div className="main-div">
        <div className="center-dev">
          <br/>
          <h1>ToDO List</h1>
          <br/>
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputlist}/>
          <button onClick={listofitems}>+</button>
          <ol>
              {
                items.map((val,index) => {
                  //return <li>{val}</li>
                  return <Lists text={val} 
                    id={index}
                    key={index}
                    onSlecte={deleteIteme}
                  />
                })
              }
          </ol>

        </div>  

      </div>
    </>
  )
}
export default App;
