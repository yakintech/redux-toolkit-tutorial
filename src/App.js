import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import AddBook from './pages/book/AddBook';
import BookList from './pages/book/BookList';
import Counter from './pages/counter'
import Products from './pages/product'
import AddFavoritesById from './pages/product/AddFavoritesById';
import ToDoList from './pages/todos/ToDoList';
import { loadProducts } from './store/favoriteSlice';

function App() {

  let favorites = useSelector(state => state.favorites);
  let state = useSelector(state => state);
  
  

  console.log('State ', state);

  let dispatch = useDispatch();

  useEffect(() => {
    
      dispatch(loadProducts());
  
  }, [])
  
  return (<>

    <h1>Favorites: {favorites.favorites.length}</h1>
    <div>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/addtofav'>Add To Fav</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/addbook'>Add New Book</Link></li>
        <li><Link to='/todos'>Todos</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path='/counter' element={<Counter />} />
      <Route path='/products' element={<Products />} />
      <Route path='/addtofav' element={<AddFavoritesById />} />
      <Route path='/books' element={<BookList />} />
      <Route path='/addbook' element={<AddBook />} />
      <Route path='/todos' element={<ToDoList />} />
    </Routes>
  </>)

}

export default App