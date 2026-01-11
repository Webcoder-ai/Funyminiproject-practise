      
  import axios from "axios";
import { useState } from "react";
    function App(){
           const [ Mood, setmood] = useState("")
             const [text, settext] = useState("")
   async function getdata(){
          let res= await axios.get("/funytext.json")
             let match= res.data.find((elem)=>{
                        return elem.mood===Mood       
              })
               if(!match) return;

              let Rn=  Math.floor( Math.random()*match.texts.length);
                 let randomtext= match.texts[Rn]
                  settext(randomtext)    
   }






  return <div className="app">
                 <select  value={Mood}  className={`select ${Mood===""?"red":"pink"} `} defaultValue="" onChange={(e)=>{
                               setmood(e.target.value)
                               
                 }}  >
                    <option value="" disabled>plz select the mood👇</option>
                    <option value="Happy">Happy😂</option>
                    <option value="Sad">Sad🙁</option>
                    <option value="Angry">Angry😡</option>
                    <option value="lalchi">Greedy🤑</option>
                 </select>
                      <button onClick={getdata}>Getdata</button>
                   <h1>{text}</h1>
  </div>
}
export default App;