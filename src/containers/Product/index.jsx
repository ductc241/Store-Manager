import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux'

import { fetchProducts } from './action'
import List from './List';
import Add from './Add';

const Product = () => {
    return (
        <div className="product">
            <Routes>
                <Route path="list" element={<List />} />
                <Route path="add" element={<Add />} />
            </Routes>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product)