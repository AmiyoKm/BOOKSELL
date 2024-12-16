import React from 'react'
import Banner from './banner'
import Topsellers from './Topsellers'
import Recommened from './Recommened.jsx'
import News from './News.jsx'
const home = () => {
  return (
    <>
      <Banner />
      <Topsellers />
      <Recommened />
      <News />
    </>
  )
}

export default home
