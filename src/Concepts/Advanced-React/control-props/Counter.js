import React, { useState } from 'react'
import Count from './Count'
import { CountProvider } from './count-context'
import Decrement from './Decrement'
import Increment from './Increment'

const Counter = ({value = null, initValue = 0, onChange}) => {
    const [count, setCount] = useState(initValue)
    const isControlled = value !== null && !!onChange
    const getCount = () => isControlled ? value : count;
    const handleCountChange = (newValue) => {
        isControlled ? onChange(newValue) : setCount(newValue)
    }
    const handleIncrement = () => {
        handleCountChange( getCount() + 1)
    }
    const handleDecrement = () => {
        handleCountChange( getCount() - 1)
    }
  return (
    <CountProvider value = {{count : getCount(), handleIncrement, handleDecrement}}>
    <div className='flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg'>
        <Decrement/>
        <Count></Count>
        <Increment/>
    </div>
    </CountProvider>
  )
}

export default Counter