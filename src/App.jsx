import React, { useState } from 'react'
import Header from './components/Header'
import CategoryPills from './components/CategoryPills'
import categories from "./data/home"
import VideoGridItem from './components/VideoGridItem'
import {videos} from "./data/home"
import Sidebar from './components/Sidebar'
import { SidebarProvider } from './context/SidebarContext'

const App = () => {
  const [selectedCategory,setSelectedCategory] = useState(categories[0])
  return (
    <SidebarProvider>
    <div className=' max-h-screen flex flex-col'>
      <Header/>
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto' >
            <div>
              <Sidebar/>
            </div>
            <div className='overflow-x-hidden px-8 pb-4'>
            <div className='sticky top-0 bg-white z-10 pb-4'> 
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
            </div>
           
            <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
              {
                videos.map(video=>(
                  <VideoGridItem key={video.id} {...video}/>
                ))
              }
       </div>
            </div>
      </div>
    </div>
    </SidebarProvider>
  )
}

export default App
