import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggel }) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center" : 'hidden'} onClick={toggel}>
            <Link to="/" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</Link>
            <Link to="/about" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">About</Link>
            <Link to="/features" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Features</Link>
            <Link to="/pricing" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</Link>
            <Link to="/contact" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</Link>
            <Link to="/login" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</Link>
            <Link to="/signup" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</Link>
        </div>
    )
}

export default Dropdown
