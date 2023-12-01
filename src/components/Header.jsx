import logo from "../assets/logo.svg"
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import Button from "../components/Button"
import { useState } from "react"
const Header = () => {
    const [showFullWidthSearch,setShowFullWidthSeacrch] = useState(false)
  return (
    <div className=' flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
       <div className= {`gap-4 flex-shrink-0 items-center ${showFullWidthSearch ? "hidden" :"flex"}`}>
        <Button variant="ghost" size="icon" className="mr-">
            <Menu/>
        </Button>
        <a href='/'>
            <img src={logo} className='h-6'/>
        </a>
       </div>
       <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" :"hidden md:flex  "}`}>
       {showFullWidthSearch &&  <Button onClick={()=>setShowFullWidthSeacrch(false)} type="button" size="icon" variant="default" className="flex-shrink-0">
            <ArrowLeft/>
        </Button>}
        <div className="flex flex-grow max-w-[600px]">
            <input type="search" placeholder="Search" className="rounded-l-full border border-secondary shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"></input>
        
        <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search/>
        </Button></div>
        
        <Button type="button" size="icon" variant="ghost" className="flex-shrink-0">
            <Mic/>
        </Button>
       </form>
       <div className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" :"flex"}`}>
       <Button onClick={()=>setShowFullWidthSeacrch(true)} size="icon" variant="ghost" className="md:hidden"  >
            <Search/>
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden"  >
            <Mic/>
        </Button>
        <Button size="icon" variant="ghost">
            <Upload/>
        </Button>
        <Button size="icon" variant="ghost">
            <Bell/>
        </Button>
        <Button size="icon" variant="ghost">
            <User/>
        </Button>
      
       </div> 
    </div>
  )
}

export default Header
