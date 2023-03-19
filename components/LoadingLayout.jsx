import React from 'react'

const LoadingLayout = ({children}) => {
  return (
    <div className='bg-primary-bg h-screen flex justify-center items-center'>{children}</div>
  )
}

export default LoadingLayout