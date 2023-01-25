import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getAllAttractions } from '../../utilities/attractions-service';

import AuthPage from '../AuthPage/AuthPage';
import MyAttractionPage from '../MyAttractionPage/MyAttractionPage';
import AllAttractionPage from '../AllAttractionPage/AllAttractionPage';
import AttractionDetailPage from '../AttractionDetailPage/AttractionDetailPage';

import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  // const attractions = getAllAttractions()
  const [attractions, setAttractions] = useState([])

  useEffect(()=> {
    getAllAttractions().then(res => {
      // console.log("res:")
      // console.log(res)
      // let resCopy = [...res]
      // console.log("resCopy:")
      // console.log(resCopy)
      // console.log(attractions)
      setAttractions(res)
      // console.log(attractions)
    })
  }, [])

  console.log("attractions outsideUseEffect:")
  console.log(attractions)
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <h1>{attractions}</h1> */}
          <Routes>
            <Route path="/attractions" element={<MyAttractionPage />} />
            <Route path="/attractions/all" element={<AllAttractionPage attractions={attractions} />} />
            <Route path="/attractions/:attractionName" element={<AttractionDetailPage attractions={attractions} />} />

            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

