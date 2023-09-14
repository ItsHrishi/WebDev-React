import React from 'react'
import { useNavigate } from 'react-router-dom'

const Lab = () => {

    const navigate = useNavigate();

    function clickHandler() {
        
        navigate( "/about");
    }

  return (
      <div>
          <div>This is Lab page
          </div>
          <button onClick={clickHandler}>About page</button>
      </div>
  )
}

export default Lab