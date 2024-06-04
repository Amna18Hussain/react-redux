import React from 'react'
import { footer } from '../data/Data'
import { FaFacebookF } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="bg-white text-black py-8 px-4">
      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="flex justify-around uppercase">
            {footer.map((val, index)=>(
              <div key={index}>
                <div className='text-2xl font-semibold mb-2'>{val.header}</div>
                <div className="flex flex-col">
                  {val.title.map((item,key)=>(
                    <span key={key}
                    className="mr-2 mb-2 hover:text-red-500 cursor-pointer"
                    >
                      {item.subtitle}
                    </span>
                    
                  ))}

                </div>

              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 p-6 bg-gray-100 rounded-lg shadow-md ">
          <h1 className="text-2xl font-semibold mb-4">
            SIGN UP NEWSLETTER
          </h1>
          <p className="text-gray-600 mb-4 ">
            Don't miss out on exiciting promotions and latest shopping news 
          </p>
          <input type="text"
          name='text'
          placeholder='your email address '
          className="w-2/3 p-4 border-gray-300 rounded mb-4" />

      <button type='button' className="bg-black text-white pt-4 pb-4 p-6 ml-4 rounded hover:bg-red-500">
        Subscribe
      </button>
      <div className="flex text-center gap-7 ">
      <FaHeart className=' hover:bg-red-500 text-2xl' />
      <FaFacebookF className=' hover:bg-red-500 text-2xl' />
      <FaCartArrowDown className=' hover:bg-red-500 text-2xl' />
      <FaSquareInstagram className=' hover:bg-red-500 text-2xl' />
      <FaTwitter className=' hover:bg-red-500 text-2xl' />

      </div>
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Footer
