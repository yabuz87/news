import React,{useState,useEffect} from 'react'
import Navbar from './component/Navbar';
import NewsBoard from './component/NewsBoard';


function App(){
  const [category,setCategory]=useState("general");
  const [language,setLanguage]=useState("en");

  return (
    <div>
      <Navbar setCategory={setCategory} category={category} setLanguage={setLanguage}/>
      <NewsBoard category={category} lang={language}/>
      
    </div>
  )
}

export default App;
