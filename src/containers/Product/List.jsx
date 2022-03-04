import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from './action' 

import ProductList from '../../components/manager/ProductList'


const List = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <>
            {products.length > 0
                ?  <ProductList products={products}/>
                : 'Not Fount Product'
            }
        </>
    )
}

export default List