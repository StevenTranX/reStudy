import React from 'react'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae aliquid dignissimos nulla, sint eaque placeat facilis qui ipsa quaerat laboriosam commodi! Quidem magni quas, quibusdam eum nisi iusto atque.</div>}></Route>
        <Route path = '/about' element = {<div>About Page</div>}></Route>
        <Route></Route>
        <Route path = '/movie/:movieId' element = {<div>This is movie details of movieId</div>}></Route>
        {/* slug or id */}
      </Routes>
    </div>
  )
}

export default App