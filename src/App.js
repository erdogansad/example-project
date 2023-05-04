import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";


import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Panel from "./components/Panel";
import Urunler from "./components/Urunler";
import Urun from "./components/Urun";
import UrunEkle from "./components/UrunEkle";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://64517f5ba322196911649cd9.mockapi.io/users")
      .then(response => {
        setProducts(response.data);
      })
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <Header/>
      <Sidebar/>

      <Switch>
        <Route exact path="/"> <Panel/> </Route>

        <Route path="/urun/:gelenId"> <Urun products={products}/> </Route>
        <Route path="/urunler"> <Urunler products={products}/> </Route>
        <Route path="/urunekle"> <UrunEkle/> </Route>
      </Switch>
      
    </React.Fragment>
  );
}

export default App;