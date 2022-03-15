import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductAdd from '../../components/manager/ProductAdd'

import { fetchCategory } from '../Category/action'

const Add = () => {
  const dispatch = useDispatch()
  const { category } = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  return (
    <ProductAdd categories={category}/>
  )
}

export default Add