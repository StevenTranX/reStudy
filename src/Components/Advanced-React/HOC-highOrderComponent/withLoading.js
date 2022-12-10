import { useEffect } from "react"
import { useState } from "react"
const url = 'https://hn.algolia.com/api/v1/search?query=react'
function withLoading(Component, url) {
    return (props) => {
        const [info, setInfo] = useState([])
        useEffect( () => {
           const fetchData = async () => {
                const response = await fetch(
                    url,
                );
                const data = await response.json()
                setInfo(data.hits)
            }
            fetchData()
        }, [])
        if (!info || info.length === 0) return <div>....Loading</div>
        return <Component {...props} data = {info}>
            
        </Component>
    }
}
export default withLoading

// ! Ôn tập HOC ở js :  map , filter, some, every, reduce
