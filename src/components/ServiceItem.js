/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom";

function ServiceItem(props) {
  return (
      
        <Link to="/checkout-page">
        <button type="button" className='shadow-2xl bg-red-300 rounded-xl text-center'>
            <img src={props.img} alt="service-item" height="100" width="350"  />
            <div className='p-4'>
                <h1 className='font-bold text-xl'>{props.title}</h1>
            </div>
        </button>
        </Link>
  )
}

export default ServiceItem