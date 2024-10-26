import { useState } from "react";
import Bannar from "./Components/Bannar";
import Header from "./Components/Header";
const App = () => {
  const [credit, setCredit]=useState(0);
  const handleCredit=(amount)=>{
    setCredit(credit+amount);
  }
  return (
    <>
      <Header credit={credit}/>
      <Bannar handleCredit={handleCredit}/>
    </>
  );
};

export default App;