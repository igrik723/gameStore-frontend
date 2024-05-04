import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import './styles/App.css'
import { useDispatch, useSelector } from "react-redux";
import { check } from './http/userAPI';
import { getUserInfoAction, userAuthAction } from "./store/action-creators/action-creators";
import { Spinner } from "react-bootstrap";
import { fetchTypes, fetchGames, fetchPublishers } from "./http/gameAPI";
import { addTypeAction, addPublisherAction, addGameAction } from "./store/action-creators/action-creators";


function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        dispatch(userAuthAction(data.role))
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])




  if (loading) {
    return <Spinner animation="grow"/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
