import React from 'react'
import Hero from '../Component/hero/Hero'
import Popular from '../Component/popular/Popular'
import Offers from '../Component/offers/Offers'
import NewCollections from '../Component/newcollections/NewCollections'
import NewsLetter from '../Component/newsletter/NewsLetter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
