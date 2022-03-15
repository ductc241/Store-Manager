import React, { useState } from 'react'

const useMutation = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()
  
    const mutation = (callback) => {
        setLoading(true)
        callback()
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data)
            })
            .finally(() => setLoading(false))
    }

    return { mutation, data, loading, error }
}

export default useMutation