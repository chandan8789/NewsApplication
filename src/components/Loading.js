import React from 'react'
import Loading  from './loading.gif'

export default function loading() {
  return (
    <div className='text-center'>
      <img src={Loading} alt="loading" srcSet="" />
    </div>
  )
}


