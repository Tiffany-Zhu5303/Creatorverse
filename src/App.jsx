import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='w-full h-full'>
      <div className='h-50vh bg-red-300 p-4 flex flex-col justify-center items-center'>
        <Link to='/'><h1 className='font-bold text-white'>CREATORVERSE</h1></Link>
        <div className='flex w-1/3 justify-between p-4'>
          <Link to='AllCreators'><button className='text-white'>View all creators</button></Link>
          <Link to='/AddCreator'><button className='text-white'>Add a creator</button></Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default App
