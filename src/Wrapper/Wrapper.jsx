import React from 'react'

const Wrapper = ({children}) => {
  return (
    <>
        <div className="flex flex-col h-full w-full">
            {children}
        </div>
    </>
  )
}

export default Wrapper