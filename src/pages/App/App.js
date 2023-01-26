import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getAllAttractions } from '../../utilities/attractions-service';
import * as attractionsAPI from '../../utilities/attractions-api';

import AuthPage from '../AuthPage/AuthPage';
import MyAttractionPage from '../MyAttractionPage/MyAttractionPage';
import AllAttractionPage from '../AllAttractionPage/AllAttractionPage';
import NewAttractionPage from '../NewAttractionPage/NewAttractionPage';
import EditAttractionPage from '../EditAttractionPage/EditAttractionPage';
import DeleteAttractionPage from '../DeleteAttractionPage/DeleteAttractionPage';
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

  // console.log("attractions outsideUseEffect:")
  // console.log(attractions)
  
  // function addAttraction(attraction) {
  //   let attractionCopy = [...attractions, attraction]
  //   setAttractions(attractionCopy)
  // }
  async function handleAddAttraction(attractionData) {
    // let attractionCopy = [...attractions, attraction]
    // setAttractions(attractionCopy)
    const attraction = await attractionsAPI.add(attractionData)
    setAttractions([...attractions, attraction])
  }

  async function handleEditAttraction(attractionData) {
    console.log("Inside handleEditAttractions")
    // let attractionCopy = [...attractions, attraction]
    // setAttractions(attractionCopy)

    const attraction = await attractionsAPI.edit(attractionData)
    // console.log("attraction:")
    // console.log(attraction)
    // let attractionsCopy = [...attractions]
    // console.log("attractionsCopy: ")
    // console.log(attractionsCopy)
    // const index = attractionsCopy.findIndex(item => item._id === attractionData._id)
    // attractionsCopy[index] = attraction
    // console.log("newAttractionsCopy:")
    // console.log(attractionsCopy)

    // setAttractions([...attractionsCopy])

    getAllAttractions().then(res => { setAttractions(res) })
  }

  async function handleDeleteAttraction(attractionData) {
    console.log("Inside handleDeleteAttractions")
    const attraction = await attractionsAPI.deleteAttraction(attractionData)
    getAllAttractions().then(res => { setAttractions(res) })
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          {/* <h1>{attractions}</h1> */}
          <Routes>
            <Route path="/attractions" element={<MyAttractionPage />} />
            <Route path="/attractions/all" element={<AllAttractionPage attractions={attractions} />} />
            <Route path="/attractions/new" element={<NewAttractionPage handleAddAttraction={handleAddAttraction} />} />
            <Route path="/attractions/:attractionName" element={<AttractionDetailPage attractions={attractions} />} />
            <Route path="/attractions/:attractionId/edit" element={<EditAttractionPage handleEditAttraction={handleEditAttraction} attractions={attractions} />} />
            <Route path="/attractions/:attractionId/delete" element={<DeleteAttractionPage handleDeleteAttraction={handleDeleteAttraction} attractions={attractions} />} />

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

