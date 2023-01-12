import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './pages/counter'
import Products from './pages/product'
import AddFavoritesById from './pages/product/AddFavoritesById';
import { loadProducts } from './store/favoriteSlice';

function App() {

  let favorites = useSelector(state => state.favorites);

  let dispatch = useDispatch();

  useEffect(() => {
    
      dispatch(loadProducts());
  
  }, [])
  
  return (<>

    <h1>FAvorites: {favorites.favorites.length}</h1>
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/addtofav'>Add To Fav</Link></li>

      </ul>
    </div>
    <Routes>
      <Route path='/counter' element={<Counter />} />
      <Route path='/products' element={<Products />} />
      <Route path='/addtofav' element={<AddFavoritesById />} />

    </Routes>
  </>)

}

export default App