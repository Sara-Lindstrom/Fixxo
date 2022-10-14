import React from 'react'

const RoundButtonIcon = ({icon, dataBsToggle, ae}) => {
    return (
      <button className="round-button" data-bs-toggle={dataBsToggle} aria-expanded={ae}>
          <i className={icon}></i>
      </button>
    )
  }
  
  export default RoundButtonIcon