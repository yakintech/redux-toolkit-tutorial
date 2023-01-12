import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './pages/counter'
import Products from './pages/product'

function App() {

  let favorites = useSelector(state => state.favorites);

  return (<>

    <h1>FAvorites: {favorites.favorites.length}</h1>
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/products'>Products</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path='/counter' element={<Counter />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  </>)

}

export default App