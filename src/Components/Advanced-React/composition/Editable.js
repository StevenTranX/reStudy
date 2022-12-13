import React, { useState } from 'react'
import useToggle from '../../Hooks/useToggle'

const Editable = () => {
    const {value : edit, handleToggle : handleToggleEdit} = useToggle()
 
  return (
    <div>
        {edit && <input className='border border-gray-400 p-3 rounded-lg' type = 'text' ></input>}
        <button onClick = {handleToggleEdit}>Open editor</button>
    </div>
  )
}

export default Editable