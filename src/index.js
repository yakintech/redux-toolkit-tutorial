import { configureStore, createStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import counterReducer from './store/counterSlice'
import favoriteReducer from './store/favoriteSlice'
import { booksReducer } from './store/reducers/bookReducer';
import todosReducer from './store/todoSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorites: favoriteReducer,
    booksReducer: booksReducer,
    todosReducer: todosReducer
  }
})


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
