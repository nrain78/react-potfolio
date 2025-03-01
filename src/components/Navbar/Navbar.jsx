import { useState } from 'react'
import { FaBars } from "react-icons/fa";   //ye icons kk liye bar icon
import { IoClose } from "react-icons/io5";  //
import { Link } from 'react-router-dom'

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const list = [
    {
      to: '/',
      value: 'Home'
    },
    {
      to: '/about',
      value: 'About'
    },
    {
      to: '/projects',
      value: 'Projects'
    },
    {
      to: '/contact',
      value: 'Contact'
    },
  ]

  return (
    <>

      <nav className='shadow-slate-200 bg-linear-to-r/hsl from-purple-700 to-purple-600 text-white flex justify-between align-center p-4 fixed top-0 left-0 right-0 z-10'>
        <h1 className='font-bold text-3xl font-mono  cursor-pointer'>My Portfolio</h1>
        {toggle ? <IoClose className='z-10 md:hidden cursor-pointer' size={30} onClick={() => setToggle(!toggle)} /> : <FaBars className='md:hidden cursor-pointer' size={30} onClick={() => setToggle(!toggle)} />}

        <ul className='hidden md:flex gap-10 font-4xl '>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.to}>{item.value}</Link>
                </li>
              )
            })
          }</ul>

        {/* {responsive design} */}
        <ul className={`shadow-2xl  text-black transition duration-150 ease-in hover:ease-in w-[100%] 
       flex flex-col gap-10 justify-center items-center font-4xl font-mono bg-gray-300
      fixed top-15 ${toggle ? 'right-0' : 'right-[-100%]'}`}>
          <li className='cursor-pointer font-2xl'><Link to={"/"}>Home</Link></li>
          <li className='cursor-pointer font-2xl'><Link to={"/about"}>About</Link></li>
          <li className='cursor-pointer font-2xl'><Link to={"/projects"}>Projects</Link></li>
          <li className='cursor-pointer font-2xl'><Link to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>

    </>
  )
}

export default Navbar
