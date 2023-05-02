import { useState, useEffect } from 'react'
import axios from 'axios'
import { RAPID_API_KEY } from '@env'

const useFetch = (endpoint, query) => {
  const rapidApiKey = RAPID_API_KEY
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...query
    }
  }

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      alert('Error fetching data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setLoading(true)
    fetchData()
  }

  return { data, loading, error, refetch }
}

export default useFetch
