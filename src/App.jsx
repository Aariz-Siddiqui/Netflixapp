import React from "react";
import ReactDOM from "react-dom";
import Sdata from "./Sdata";
import Card from "./Card";
import "./index.css";

const App =()=>{
    return(
        <>
  <h1 className="heading_style">My Favourite Shows Of All Time</h1>
  {Sdata.map((val)=>{
      return(
        <Card
        key={val.id} 
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
      )
  })}
  </>
    )
}
export default App;
