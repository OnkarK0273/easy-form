import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormBuilder from './formBuilder'
import FormRender from './formRender'

function AllRoutes() {
  return (
    <Routes>

        <Route path='/' element={<FormBuilder/>}/>

        <Route path='/pre' element={<FormRender/>}/>

    </Routes>
  )
}

export default AllRoutes