import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b-4 border-blue-600 text-left fixed top-0 bg-blue-500 font-bold w-full 
    text-lg text-white'>
        <ul>
            <li className='inline-block py-4'>
                <Link to="/" className='pl-6 pr-8'>Home</Link>
            </li>
             <li className='inline-block py-4'>
                <Link to="/about" className='pl-6 pr-8'>About</Link>
            </li>
             <li className='inline-block py-4'>
                <Link to="/contacts-list" className='pl-6 pr-8'>Contacts</Link>
            </li>
       
           <li className='float-right inline-block py-4'>
                <Link to="/login" className='pl-12 pr-12 br-200'>Login</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar