import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToFavFromById } from '../../store/favoriteSlice';

function AddFavoritesById() {

    const [id, setid] = useState(0);
    let dispatch = useDispatch();

    const addToFav = () => {
        dispatch(addToFavFromById(id))
    }

    return (<>
        <div>
            <label>Id:</label>
            <input type='text' onChange={(e) => setid(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addToFav()}>Add to Fav</button>
        </div>
    </>

    )
}

export default AddFavoritesById