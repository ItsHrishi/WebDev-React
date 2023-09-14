import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    function clickHandler() {
        navigate("/");
    }

  return (
      <div>
          <div>This is About page</div>
          <button on onClick={clickHandler}>Home Page</button>
      </div>
  )
}

export default About