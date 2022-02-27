import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from './action'

const ProductList = (props) => {
    useEffect(() => {
        console.log(props)
        props.fetchAllProducts()
    }, [])

    return (
        <div>ProductList</div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(fetchProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)