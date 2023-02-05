import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Pages } from '../utils/pages'
import './style.css'
const Root = () => {
  return (
    <div className='main-con'>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/bosh-sahifa'}/>} />
        {
          Pages.map((v) => {
            return <Route path={v.path} element={v.element} />
          })
        }
      </Routes>
    </div>
  )
}

export default Root