import React from 'react'
import { ReactTyped } from "react-typed";

const AutoText = () => {
  return (
    <div>  <ReactTyped
    strings={[
      "Web Developer",
      "Noor-Ul-Ain",
    ]}
    typeSpeed={50}
    backSpeed={70}
    attr="placeholder"
    loop
    > <input type="text" />
    </ReactTyped>
    
    </div>
  )
}

export default AutoText