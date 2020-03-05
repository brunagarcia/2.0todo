import React, { Component } from 'react'
import { General } from '../src/styles/general'
import Header from '../src/Header'

const App = ({ Component, pageProps }) => {
  return (
    <General>
      <Header />
      <Component {...pageProps} />
    </General>
  )

}
export default App
