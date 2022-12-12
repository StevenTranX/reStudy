import React, { useState } from 'react'

const HandleValue = () => {
    const [value, setValue] = useState(0)
  return (
    <div>
        <input type = 'text' name = '' id = '' onChange={(e) => setValue(e.target.value)}/>
        <DisplayValue value = {value}></DisplayValue>
        </div>
  )
}
const DisplayValue = ({value}) => {
    return <span>{value}</span>
}

export default HandleValue