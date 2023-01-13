import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../store/actions/booksAction';

function AddBook() {

    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');

    let dispatch = useDispatch();


    const add = () => {

        let id = Math.floor(Math.random() * 99999);
        
        let newBook = {
            id: id,
            title: title,
            author: author
        }


        dispatch(addNewBook(newBook));

    }

  return (<>
    <div>
        <div>
            <label>Title</label>
            <input type='text' onChange={(e) => settitle(e.target.value)} />
        </div>

        <div>
            <label>Author</label>
            <input type='text' onChange={(e) => setauthor(e.target.value)} />
        </div>

        <div>
            <button onClick={() => add()}>Add</button>
        </div>

    </div>
  </>
  )
}

export default AddBook