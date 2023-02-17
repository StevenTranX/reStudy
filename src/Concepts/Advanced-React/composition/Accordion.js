import React, { useState } from 'react'
import useToggle from '../../Hooks/useToggle'
import AccordionContent from './AccordionContent'
import AccordionHeader from './AccordionHeader'
// ? Giả sử ta dùng nhiều Accordion, Card, Book, Header..... thì có cách nào tái sử dụng bằng cách chỉ viết 1 Accordion
// => 
// Specialized component : những component chấp nhận vào là prop và thực hiện những chức năng cụ thể
// Container component : là cpn cha và wrap lại những cpn specialized bên trong. 

// *AccordionHeader và AccordionConent là specialized cpn
const Accordion = () => {
    const {value : show, handleToggle : handleToggleShow} = useToggle()

  return (
    <div>
        <AccordionHeader  show = {show} handleToggleShow={handleToggleShow}/>
        <AccordionContent show = {show}/>
    </div>
  )
}

export default Accordion  
