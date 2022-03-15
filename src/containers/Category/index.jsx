import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import List from './List'

const Category = () => {
    return (
        <div className="catrgory">
            <Routes>
                <Route path='list' element={<List />} />
            </Routes>
        </div>
    )
}

export default Category