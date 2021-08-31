import React from 'react'

const Footer = () => {
    return (
        <footer>
        <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12 inset-x-0
             bottom-0 fixed">

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                <h5 className="text-xl font-medium uppercase mb-4">Fresh Design</h5>
                <p className="text-gray-600">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable</p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                <h5 className="text-xl font-medium uppercase mb-4">Clean Code</h5>
                <p className="text-gray-600">FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
                <span className="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
                <h5 className="text-xl font-medium uppercase mb-4">Perfect Tool</h5>
                <p className="text-gray-600">FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
            </div>

        </div>
        </footer>
    )
}

export default Footer
