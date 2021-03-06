import React, {  useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Headertext";
import Headings from "./Components/Top/Headings";
import News from "./Components/Card/Cards";

function App() {
  const [ft,setFt]=useState([]);
  const [fd,setFd]=useState([]);
  const [fu,setFu]=useState([]);
  const [fo,setFo]=useState([]);
  const [fdesc,setFdesc]=useState([]);
  const [foriginal,setForiginal]=useState([]);
  const [load,setLoad]=useState(true)

    // Axios.defaults.baseURL="https://fakend.herokuapp.com/time"
    const serverURL = "/api/time";

    // const proxyurl="https://cors-anywhere.herokuapp.com/";
    // const url="https://fakend.herokuapp.com/time";
    const handleApply = async () => {
      setLoad(true)
      await fetch(serverURL,{headers:{'Access-Control-Allow-Origin':true}})
      .then((res) => res.json())
      .then((dir1) => {
        var ob=dir1.finale[0];
        ob=JSON.parse(ob);
        var title=ob.title;
        var op=ob.OP;
        setLoad(false)
        setFt(Object.values(title));
        setFu(Object.values(ob.url));
        setFd(Object.values(ob.date));
        setFo(Object.values(op));
        setForiginal(Object.values(op));
        setFdesc(Object.values(ob.desc));
        console.log(ob.desc);
      });
    }
    
      useEffect(() => {
        handleApply()
  }, []);
  return (
    <div className="App">
      <Header />
      <Headings />
      <News ft={ft} fu={fu} fd={fd} fo={fo} fdesc={fdesc} foriginal={foriginal} load={load}/>
    </div>
  );
}

export default App;
