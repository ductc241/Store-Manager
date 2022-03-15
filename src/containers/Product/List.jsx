import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts } from './action' 

import ProductList from '../../components/manager/ProductList'
import LoadingIndicator from '../../components/common/LoadingIndicator'

const List = () => {
    const dispatch = useDispatch()
    const { products, isLoading } = useSelector(state => state.products)

    const ref = useRef(0)
    console.log(`List_CTN render: ${ref.current++}`)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <React.Fragment>
            {isLoading ? (
                <LoadingIndicator />
            ) : products.length > 0 ? (
                <ProductList products={products}/>
            ): (
                'Not Fount Product'
            )}
        </React.Fragment>
    )
}

export default List