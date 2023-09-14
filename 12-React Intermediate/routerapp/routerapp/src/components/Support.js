import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate();

    function backHandler() {
        navigate(-1);
        
    }

  return (
      <div>
          <div>This is Support page
          </div>
          {/* to go back */}
          <button onClick={backHandler}>
              BAck
          </button>
      </div>
  )
}

export default Support