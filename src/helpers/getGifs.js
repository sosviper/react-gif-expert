export const getGifts = async ( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=vlmlZVtnuP1lB9uCkV1Gu2rdRNn1WUbu&q=${ category }&limit=10`
  const resp = await fetch( url )
  const { data } = await resp.json()

  const gifts = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  // console.log(gifts)
  return gifts
}