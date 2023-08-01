import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getAllAttractions } from '../../utilities/attractions-service';
import * as attractionsAPI from '../../utilities/attractions-api';

import AuthPage from '../AuthPage/AuthPage';

import AllAttractionPage from '../AllAttractionPage/AllAttractionPage';
import NewAttractionPage from '../NewAttractionPage/NewAttractionPage';
import EditAttractionPage from '../EditAttractionPage/EditAttractionPage';
import DeleteAttractionPage from '../DeleteAttractionPage/DeleteAttractionPage';
import AttractionDetailPage from '../AttractionDetailPage/AttractionDetailPage';

import NavBar from '../../components/NavBar/NavBar';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [attractions, setAttractions] = useState([])

  const getAttractions = async () => {
    try {
      const allAttractions = await getAllAttractions()
      setAttractions(allAttractions)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    getAttractions();
  }, [])

  async function handleAddAttraction(attractionData) {
    const attraction = await attractionsAPI.add(attractionData)
    setAttractions([...attractions, attraction])
  }

  async function handleEditAttraction(attractionData) {
    const attraction = await attractionsAPI.edit(attractionData)
    getAllAttractions().then(res => { setAttractions(res) })
  }

  async function handleDeleteAttraction(attractionData) {
    const attraction = await attractionsAPI.deleteAttraction(attractionData)
    getAllAttractions().then(res => { setAttractions(res) })
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/attractions/all" element={<AllAttractionPage attractions={attractions} />} />
            <Route path="/attractions/new" element={<NewAttractionPage handleAddAttraction={handleAddAttraction} />} />
            <Route path="/attractions/:attractionName" element={<AttractionDetailPage attractions={attractions} />} />
            <Route path="/attractions/:attractionId/edit" element={<EditAttractionPage handleEditAttraction={handleEditAttraction} attractions={attractions} />} />
            <Route path="/attractions/:attractionId/delete" element={<DeleteAttractionPage handleDeleteAttraction={handleDeleteAttraction} attractions={attractions} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

