import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.setAttribute('id', 'page-top')
  })
  return <Component {...pageProps} />
}

export default MyApp
