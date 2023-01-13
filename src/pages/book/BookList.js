import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../store/actions/booksAction';

function BookList() {

    let { books } = useSelector(state => state.booksReducer)

    let dispatch  = useDispatch();

    const deleteBookFromList = (id) => {
        dispatch(deleteBook(id))
    }
    
    return (<>
        <h1>Length: {books.length}</h1>

        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    books && books.map(item => <>

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td><button onClick={() => deleteBookFromList(item.id)}>Delete</button></td>
                        </tr>
                    </>)
                }
            </tbody>

        </table>

    </>
    )
}

export default BookList