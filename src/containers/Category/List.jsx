import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryList from '../../components/manager/CategoryList'
import { fetchCategory } from './action'


const List = () => {
    const dispatch = useDispatch()
    const { category, isLoading } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategory())    
    }, [])

    return (
        <React.Fragment>
            {isLoading ? (
                'Loading'
            ) : category.length > 0 ? (
                <CategoryList categories={category} />
            ): (
                'Not Found Category'
            )}
        </React.Fragment>
    )
}

export default List