import '../styles/globals.css'

// punto central de la aplicación
// parte de cada una de las pantallas
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
