import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmark, setBookmarks] = useState ([])

  const handleAddToBookmark = blog => {
    console.log('bookmark adding soon')
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
     
     
    </>
  )
}

export default App
