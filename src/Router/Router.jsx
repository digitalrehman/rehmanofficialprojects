import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../pages/All'
import ReactJS from '../pages/ReactJS'
import FullStack from '../pages/FullStack'
import HTML from '../pages/HTML'
import Notfound from '../pages/Notfound'
import Description from '../components/DescriptionList/Descripttion'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HTML/>}/>
      <Route path='/all' element={<All/>}/>
      <Route path='/react' element={<ReactJS/>}/>
      <Route path='/fullstack' element={<FullStack/>}/>
      <Route path='/description/:id' element={<Description/>}/>

      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default Router