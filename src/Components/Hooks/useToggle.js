import { useState } from "react";

export default function useToggle () {
    const [value, setValue] = useState(false)
    const handleToggle = () => {
        setValue( prev => !prev)
    }
    return {
        value, handleToggle,
    }
}