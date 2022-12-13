import React from 'react'

const AccordionHeader = ({handleToggleShow, show, children}) => {
  return (
    <div>
    <div onClick = {handleToggleShow} className="header">{children}
        {show ? <span >+</span> : <span>-</span>}
        </div>
    </div>
  )
}

export default AccordionHeader
