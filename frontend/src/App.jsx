import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import PostList from './components/PostList'

function App() {

  return (
    <>
      <Header />
      <PostList />
      
    </>
  )
}

export default App
