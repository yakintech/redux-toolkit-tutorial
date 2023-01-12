import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add, empty } from '../../store/favoriteSlice';

function Index() {

    const [products, setproducts] = useState([]);

    let dispatch = useDispatch();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })

    }, [])

    const addToFavorites = () => {
        dispatch(add());
    }

    const emptyFavorites = () => {
        dispatch(empty())
    }

    return (<>
        <button onClick={() => emptyFavorites()}>Empty</button>
        <ul>
            {
                products && products.map(item => <>
                    <li key={item.key}>{item.name}</li>
                    <button onClick={() => addToFavorites()}>Add</button>
                </>)
            }
        </ul>

    </>
    )
}

export default Index