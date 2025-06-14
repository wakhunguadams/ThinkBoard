import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast, {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div data-theme="forest">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App