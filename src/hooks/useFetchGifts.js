/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { getGifts } from "../helpers/getGifs"

export const useFetchGifts = ( category ) => {

  const [ images, setImages ] = useState( [] )
  const [ isLoading, setIsLoading ] = useState( true )

  const getImages = async() => {
    const newImages = await getGifts( category )
    setImages(newImages)
    setIsLoading( false )
  }

  useEffect( () => {
    getImages()
  }, [])

  return {
    images,
    isLoading
  }
}
