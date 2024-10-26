import { useState } from "react";
import Bannar from "./Components/Bannar";
import Header from "./Components/Header";
import SelectedP from "./Components/SelectedP";
import AvailableP from "./Components/AvailableP";
const App = () => {
  const [credit, setCredit]=useState(0);
  const handleCredit=(amount)=>{
    setCredit(credit+amount);
  }
  const [isActive, setIsActive]=useState(true)
  const handleTogle=(status)=>{
    if(!status){
      setIsActive(false)
    }
    else{setIsActive(true)}
  }
  const [select, setSelect]=useState([])
  const handleChoosePlayer=(card)=>{
    setSelect([...select,card])
  }
console.log(select);
 
 
  return (
    <>
      <Header credit={credit}/>
      <Bannar handleCredit={handleCredit}/>
      <div className="flex justify-center gap-4">
      <button onClick={()=>handleTogle(true)} className="btn">AvailablePlayers</button>
      <button onClick={()=>handleTogle(false)} className="btn">SelectedPlayer ({select.length})</button>
      </div>
      {
        isActive?<AvailableP handleChoosePlayer={handleChoosePlayer}/>:<SelectedP select={select} handleTogle={handleTogle}/>
      }
    </>
  );
};

export default App;