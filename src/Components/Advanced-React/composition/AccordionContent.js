import React from 'react'

const AccordionContent = ({show}) => {
  return (
    <div> {show && <div className='content'>Accordion Content</div>}</div>
  )
}

export default AccordionContent
